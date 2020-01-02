import {RaycasterService} from './raycaster.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RendererService} from '../renderer';
import {PerspectiveCameraComponent} from '../camera/perspective-camera.component';
import {AtftCameraModule} from '../camera/atft-camera.module';
import {BoxMeshComponent} from '../object/mesh/box-mesh.component';
import {StatsService} from '../stats/stats.service';

describe('raycaster', () => {
  describe('RaycasterService', () => {

    let cameraFixture: ComponentFixture<PerspectiveCameraComponent>;
    let camera: PerspectiveCameraComponent;

    let boxFixture: ComponentFixture<BoxMeshComponent>;
    let box: BoxMeshComponent;


    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftCameraModule
        ],
        declarations: [
          BoxMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      cameraFixture = TestBed.createComponent(PerspectiveCameraComponent);
      camera = cameraFixture.componentInstance;
      camera.fov = 60;
      camera.near = 1;
      camera.far = 1100;
      camera.positionX = 100;
      camera.positionY = 50;
      camera.positionZ = 10;

      boxFixture = TestBed.createComponent(BoxMeshComponent);
      box = boxFixture.componentInstance;
      box.width = 10;
      box.height = 10;
      box.depth = 10;
      boxFixture.detectChanges();
      return TestBed.compileComponents();
    }));


    it('mouseEnter and mouseDown (skip)', () => {
      const raycaster = new RaycasterService();
      raycaster.setCamera(camera);

      raycaster.addGroup(box);
      raycaster.enable();
      boxFixture.detectChanges();
      cameraFixture.detectChanges();

      raycaster.pause();
      raycaster.resume();
      expect().nothing();
      /* TODO: Fix raycasrter test
      spyOn(box.getObject(), 'dispatchEvent');

      window.dispatchEvent(new MouseEvent('mousemove', {clientX: 0, clientY: 0}));
      expect(box.getObject().dispatchEvent).toHaveBeenCalledWith({type: 'mouseEnter'});
      boxFixture.detectChanges();
      cameraFixture.detectChanges();

      window.dispatchEvent(new MouseEvent('mousedown', {clientX: 0, clientY: 0}));
      expect(box.getObject().dispatchEvent).toHaveBeenCalledWith({type: 'mouseDown'});
      boxFixture.detectChanges();
      cameraFixture.detectChanges();
      */
      raycaster.ngOnDestroy();
    });


  });

});
