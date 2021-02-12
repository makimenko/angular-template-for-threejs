import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SkipSelf} from '@angular/core';
import {appliedMaterial, provideParent} from '../../../util';
import {EmptyComponent} from '../../../object/helper';
import {AnimationService} from '../../../animation';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';
import * as THREE from 'three';
import {Subscription} from 'rxjs';

@Component({
  selector: 'atft-loader-actor',
  providers: [provideParent(LoaderActorComponent)],
  template: ``
})
export class LoaderActorComponent extends EmptyComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  animate = true;

  @Input()
  materialColor = 0x5DADE2;

  private ring1: THREE.Mesh;
  private ring2: THREE.Mesh;
  private ring3: THREE.Mesh;

  private subscribed = false;
  private i = 0;
  protected animation: Subscription;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService
  ) {
    super(rendererService, parent);
  }

  public ngAfterViewInit() {
    super.ngAfterViewInit();
    // console.log('LoaderActorComponent.ngAfterViewInit');
    this.init();
    this.start();
  }

  protected getMaterial(): THREE.Material {
    return appliedMaterial(this.materialColor, 'basic');
  }

  protected init() {
    // console.log('LoaderActorComponent.init');
    const geometry = new THREE.RingGeometry(0.85, 1, 64, 1, 0, Math.PI * 1.8);
    const material = this.getMaterial();

    this.ring1 = new THREE.Mesh(geometry, material);
    this.ring1.scale.set(70, 70, 1);
    this.object.add(this.ring1);

    this.ring2 = new THREE.Mesh(geometry, material);
    this.ring2.scale.set(60, 60, 1);
    this.object.add(this.ring2);

    this.ring3 = new THREE.Mesh(geometry, material);
    this.ring3.scale.set(50, 50, 1);
    this.object.add(this.ring3);


  }

  protected start() {
    // console.log('LoaderActorComponent.updateText');
    if (this.animate) {
      // console.log('LoaderActorComponent.animate init');
      this.updateAnimation = this.updateAnimation.bind(this);
      this.animation = this.animationService.animate.subscribe(this.updateAnimation);
      this.subscribed = true;
      this.animationService.start();
    }
  }

  public ngOnDestroy() {
    // console.log('LoaderActorComponent.ngOnDestroy');
    super.ngOnDestroy();
    this.stop();
  }

  protected updateAnimation() {
    if (this.subscribed) {
      // console.log('LoaderActorComponent.updateAnimation');
      this.i++;
      this.ring1.scale.set(70 + (Math.sin(this.i / 20) * 10) + 12, 70 + (Math.sin(this.i / 20) * 10) + 12, 1);

      this.ring1.rotateZ(Math.sin(this.i / 100) / 5);
      this.ring2.rotateZ(Math.cos(this.i / 70) / 10);
      this.ring3.rotateZ(Math.sin(this.i / 50) / 20);
    }
  }

  public stop() {
    if (this.subscribed) {
      // console.log('LoaderActorComponent.done');
      this.subscribed = false;
      this.i = 0;
      this.animation?.unsubscribe();
    }
  }


}
