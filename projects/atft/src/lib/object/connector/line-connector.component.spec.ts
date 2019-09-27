import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftConnectorModule} from './atft-connector.module';
import {AnimationService} from '../../animation/animation.service';
import {BoxMeshComponent} from '../mesh/box-mesh.component';
import {LineConnectorComponent} from './line-connector.component';

describe('connector', () => {
  describe('LineConnectorComponent', () => {
    let component: LineConnectorComponent;
    let fixture: ComponentFixture<LineConnectorComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftConnectorModule
        ],
        declarations: [
          BoxMeshComponent
        ],
        providers: [
          RendererService,
          AnimationService
        ]
      });
      fixture = TestBed.createComponent(LineConnectorComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('no source target', () => {
      expect(fixture.detectChanges).toThrow();
    });


    it('init', async(() => {
      const fixtureObject = TestBed.createComponent(BoxMeshComponent);
      const obj = fixtureObject.componentInstance;
      fixtureObject.detectChanges();
      component.source = obj;
      component.target = obj;
      fixture.detectChanges();

      component.updateLineGeometry();
      expect(component).toBeTruthy();
    }));


  });
});
