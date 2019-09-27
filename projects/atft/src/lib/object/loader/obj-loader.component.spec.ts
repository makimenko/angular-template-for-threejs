import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ObjLoaderComponent} from './obj-loader.component';
import {AtftLoaderModule} from './atft-loader.module';

describe('loader', () => {
  describe('ObjLoaderComponent', () => {
    let component: ObjLoaderComponent;
    let fixture: ComponentFixture<ObjLoaderComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftLoaderModule
        ],
        providers: [
          RendererService
        ]
      });
      fixture = TestBed.createComponent(ObjLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', async(() => {
      component = fixture.componentInstance;
      component.model = 'x';
      component.material = 'x';
      component.texturePath = 'x';
      fixture.detectChanges();
      expect(component).toBeTruthy();
      fixture.detectChanges();
    }));

  });
});
