import {Injectable, OnDestroy} from '@angular/core';
import * as THREE from 'three';
import {AbstractCamera} from '../camera/abstract-camera';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterEvent} from './raycaster-event';

interface NearestIntersection {
  object: THREE.Object3D;
  face: THREE.Face;
}

@Injectable()
export class RaycasterService implements OnDestroy {

  private raycaster = new THREE.Raycaster();
  private selected?: THREE.Object3D;
  private enabled = false;
  private camera!: AbstractCamera<any>;
  private groups: Array<AbstractObject3D<any>> = [];
  private paused = false;


  constructor() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.subscribe();
  }

  ngOnDestroy() {
    this.disable();
    this.unsubscribe();
  }

  private subscribe() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('click', this.onClick);
    window.addEventListener('touchstart', this.onTouchStart);
  }

  private unsubscribe() {
    // console.log('unsubscribe raycaster');
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('click', this.onClick);
    window.removeEventListener('touchstart', this.onTouchStart);
  }

  public enable() {
    this.enabled = true;
  }

  public disable() {
    this.enabled = false;
  }

  public pause() {
    this.paused = true;
  }

  public resume() {
    this.paused = false;
  }


  get isEnabled() {
    return this.enabled;
  }

  public setCamera(camera: AbstractCamera<any>) {
    // console.log('Add camera to raycaster', camera);
    this.camera = camera;
  }

  public addGroup(group: AbstractObject3D<any>) {
    // console.log('RaycasterService.addGroup', group.name, group);
    this.groups.push(group);
  }

  private onMouseMove(event: any) {
    if (!this.isReady()) {
      return;
    }
    // #373: removed: event.preventDefault();
    const i = this.getFirstIntersectedGroup(event.layerX, event.layerY);
    if ((i && (!this.selected || this.selected !== i.object)) || !i) {
      if (this.selected) {
        // @ts-ignore
        this.selected.dispatchEvent({type: RaycasterEvent.mouseExit});
        this.selected = undefined;
      }
      if (i && i.object) {
        this.selected = i.object;
        // @ts-ignore
        this.selected.dispatchEvent({type: RaycasterEvent.mouseEnter, face: i.face});
      }
    }

  }

  private onClick(event : any) {
    if (!this.isReady(true)) {
      return;
    }
    // #373: removed: event.preventDefault();
    const i = this.getFirstIntersectedGroup(event.layerX, event.layerY);
    if (i && i.object) {
      // @ts-ignore
      i.object.dispatchEvent({type: RaycasterEvent.click, face: i.face});
    }
  }

  private onTouchStart(event: TouchEvent) {
    // console.log(event);
    if (!this.isReady()) {
      return;
    }
    // #373: removed: event.preventDefault();
    const i = this.getFirstIntersectedGroup(event.touches[0].clientX, event.touches[0].clientY);
    if (i && i.object) {
      // @ts-ignore
      i.object.dispatchEvent({type: RaycasterEvent.click, face: i.face});
    }
  }

  private isReady(ignorePaused?: boolean) {
    return this.enabled
      && (ignorePaused || !this.paused)
      && this.camera
      && this.camera.camera
      && this.groups
      && this.groups.length > 0;
  }

  private getFirstIntersectedGroup(x : number, y : number): NearestIntersection | undefined {
    x = (x / window.innerWidth) * 2 - 1;
    y = -(y / window.innerHeight) * 2 + 1;
    const mouseVector = new THREE.Vector2(x, y/*, 0.5*/);
    this.raycaster.setFromCamera(mouseVector, this.camera.camera);
    let face!: THREE.Face;

    // loop across all groups. Try to find the group with nearest distance.
    let nearestIntersection!: THREE.Intersection;
    let nearestGroup!: THREE.Object3D;
    for (let k = 0; k < this.groups.length; k++) {
      const i = this.groups[k].getObject();
      const intersection = this.raycaster.intersectObject(i, true);
      if (intersection.length > 0 && (!nearestIntersection || nearestIntersection.distance > intersection[0].distance)) {
        nearestIntersection = intersection[0];
        if (nearestIntersection.face) {
          face = nearestIntersection.face;
        }
        nearestGroup = i;
      }
    }

    // return the group with nearest distance
    if (nearestGroup) {
      return {
        object: nearestGroup,
        face: face
      };
    } else {
      return undefined;
    }
  }

}
