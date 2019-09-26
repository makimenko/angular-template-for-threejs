import {RaycasterService} from './raycaster.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RendererService} from '../renderer';
import {PerspectiveCameraComponent} from '../camera';
import {AtftCameraModule} from '../camera/atft-camera.module';
import {BoxMeshComponent} from '../object/mesh';

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
          RendererService
        ]
      });
      cameraFixture = TestBed.createComponent(PerspectiveCameraComponent);
      camera = cameraFixture.componentInstance;

      boxFixture = TestBed.createComponent(BoxMeshComponent);
      box = boxFixture.componentInstance;
      box.height = 1000;
      box.width = 1000;
      box.depth = 1000;

      return TestBed.compileComponents();
    }));

    it('validate', () => {
      const raycaster = new RaycasterService();
      raycaster.setCamera(camera);

      raycaster.addGroup(box);
      raycaster.enable();
      boxFixture.detectChanges();
      cameraFixture.detectChanges();

      const evt = new MouseEvent('mousemove', {clientX: 0, clientY: 0});
      window.dispatchEvent(evt);

      // TODO: assertions

      boxFixture.detectChanges();
      cameraFixture.detectChanges();

      raycaster.disable();
      raycaster.ngOnDestroy();

    });


  });

});
