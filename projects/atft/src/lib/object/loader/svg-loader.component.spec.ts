import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {IconService, SvgLoaderService} from './services';
import {SVGLoaderComponent} from './svg-loader.component';
import {StatsService} from '../../stats';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {PerspectiveCameraComponent} from '../../camera';
import {AnimationService} from '../../animation';
import {RaycasterService} from '../../raycaster';
import {SceneComponent} from '../scene.component';
import {RendererCanvasComponent} from '../../renderer';
import {By} from 'protractor';


@Component({
  selector: 'atft-mock',
  template: `
    <atft-renderer-canvas>
      <atft-perspective-camera [fov]=60 [near]=1 [far]=1100></atft-perspective-camera>
      <atft-svg-loader icon="a:sitemap-solid" overrideMaterialColor="#ff0000">
      </atft-svg-loader>
      <atft-scene></atft-scene>
    </atft-renderer-canvas>
  `
})
class MockParentComponent {
  @ViewChild(SVGLoaderComponent) child: SVGLoaderComponent;
}

describe('loader', () => {

  describe('SVGLoaderComponent', () => {
    let parentComponent: MockParentComponent;
    let fixture: ComponentFixture<MockParentComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          PerspectiveCameraComponent,
          SceneComponent,
          SVGLoaderComponent,
          MockParentComponent,
          RendererCanvasComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          RaycasterService,
          SvgLoaderService,
          IconService
        ],
        schemas: []
      }).compileComponents();
      fixture = TestBed.createComponent(MockParentComponent);
      parentComponent = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('init', waitForAsync( () => {
      expect(parentComponent).toBeTruthy();
      fixture.detectChanges();

      const childComponent = parentComponent.child;
      expect(childComponent).toBeTruthy();
      expect(childComponent.icon).toBe('assets/svg/sitemap-solid.svg');
      expect(childComponent.overrideMaterialColor).toBe('#ff0000');
    }));

  });

});
