import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MeshLineConnectorComponent} from './mesh-line-connector.component';
import {AtftConnectorModule} from './atft-connector.module';
import {AnimationService} from '../../animation';
import {BoxMeshComponent} from '../mesh';
import {StatsService} from '../../stats';

describe('connector', () => {
  describe('MeshLineConnectorComponent', () => {
    let component: MeshLineConnectorComponent;
    let fixture: ComponentFixture<MeshLineConnectorComponent>;

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
      fixture = TestBed.createComponent(MeshLineConnectorComponent);
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
      component.animated = true;
      fixture.detectChanges();

      component.updateLineGeometry();

      expect(component).toBeTruthy();
    }));


  });
});
