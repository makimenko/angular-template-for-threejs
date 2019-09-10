import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, ViewChild} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {defaultSceneWrapper} from '../common/default-scene-wrapper';
import {BoxMeshComponent} from '../../../projects/atft/src/lib/objects/mesh';

@Component({
  selector: 'app-storybook-animate-loop',
  template: defaultSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff" (render)="mainRenderer.render()">
  </atft-box-mesh>
  `)
})
class StorybookAnimateLoopComponent {

  @ViewChild(BoxMeshComponent, {static: false}) box;

  k = 0;

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animate();
  }

  public animate() {
    requestAnimationFrame(this.animate);
    this.k += 0.02;
    this.box.rotateX = this.k;
    this.box.rotateY = -this.k * 2;
    this.box.rotateZ = this.k * 3.3;
    this.box.applyRotation();
    this.box.render.emit();
  }

}


@Component({
  selector: 'app-storybook-animate-system',
  template: defaultSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff" (render)="mainRenderer.render()">
  </atft-box-mesh>
  `)
})
class StorybookAnimateSystemComponent {

  @ViewChild(BoxMeshComponent, {static: false}) box;

  k = 0;

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animate();

  }

  public animate() {
    requestAnimationFrame(this.animate);
    this.k += 0.02;
    this.box.rotateX = this.k;
    this.box.rotateY = -this.k * 2;
    this.box.rotateZ = this.k * 3.3;
    this.box.applyRotation();
    this.box.render.emit();
  }

}


storiesOf('Animate', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('loop', () => ({
    component: StorybookAnimateLoopComponent
  }))
  .add('system', () => ({
    component: StorybookAnimateSystemComponent
  }))
;



