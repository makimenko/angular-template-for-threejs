import {Injectable, OnDestroy} from '@angular/core';
import * as THREE from 'three';
import {AbstractCamera} from '../camera/abstract-camera';
import {AbstractObject3D} from '../object/abstract-object-3d';

@Injectable()
export class RaycasterService implements OnDestroy {

  private raycaster = new THREE.Raycaster();
  private selected: THREE.Object3D;
  private enabled = false;
  private camera: AbstractCamera<any>;

  private objects: Array<AbstractObject3D<any>> = [];


  constructor() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private subscribe() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mousedown', this.onMouseDown);
  }

  private unsubscribe() {
    console.log('unsubscribe raycaster');
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mousedown', this.onMouseDown);
  }

  public enable() {
    this.enabled = true;
  }

  public disable() {
    this.enabled = false;
  }

  public setCamera(camera: AbstractCamera<any>) {
    console.log('Add camera to raycaster', camera);
    this.camera = camera;
  }

  public addGroup(group: AbstractObject3D<any>) {
    this.objects.push(group);
  }

  private onMouseMove(event) {
    const i = this.getIntersected(event);
    console.log('mousemove', this.isReady());
    if (i) {
      console.log('selected', i);
      if (!this.selected || this.selected !== i) {
        if (this.selected) {
          this.selected.dispatchEvent({type: 'mouseExit'});
          this.selected = null;
        }
        this.selected = i;
        this.selected.dispatchEvent({type: 'mouseEnter'});
      }
    }
  }

  private onMouseDown(event) {
    const i = this.getIntersected(event);
    if (i) {
      i.dispatchEvent({type: 'mouseDown'});
    }
  }

  private isReady() {
    return this.enabled
      && this.camera
      && this.camera.camera
      && this.objects
      && this.objects.length > 0;
  }

  private getIntersected(event): THREE.Object3D {
    if (!this.isReady()) {
      return;
    }
    event.preventDefault();
    return this.getFirstIntersectedGroup(event.layerX, event.layerY);
  }

  private getFirstIntersectedGroup(x, y): THREE.Object3D {
    x = (x / window.innerWidth) * 2 - 1;
    y = -(y / window.innerHeight) * 2 + 1;
    const mouseVector = new THREE.Vector3(x, y, 0.5);
    this.raycaster.setFromCamera(mouseVector, this.camera.camera);
    this.objects.forEach(i => {
      console.log(i );
      const objs = this.raycaster.intersectObject(i.getObject(), true);
      if (objs.length > 0) {
        console.log('found', i.getObject());
        return i.getObject();
      }
    });
    return;
  }

}
