import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AtftConnectorModule} from './atft-connector.module';
import {AnimationService} from '../../animation/animation.service';
import {BoxMeshComponent} from '../mesh/box-mesh.component';
import {LineConnectorComponent} from './line-connector.component';
import {StatsService} from '../../stats';

describe('connector', () => {
  describe('LineConnectorComponent', () => {
    let component: LineConnectorComponent;
    let fixture: ComponentFixture<LineConnectorComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftConnectorModule
        ],
        declarations: [
          BoxMeshComponent
        ],
        providers: [
          StatsService,
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


    it('init', waitForAsync(() => {
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
