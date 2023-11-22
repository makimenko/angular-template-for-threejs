import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ObjLoaderComponent} from './obj-loader.component';
import {AtftLoaderModule} from './atft-loader.module';
import {StatsService} from '../../stats';
import {ObjLoaderService} from './services';

describe('loader', () => {
  describe('ObjLoaderComponent', () => {
    let component: ObjLoaderComponent;
    let fixture: ComponentFixture<ObjLoaderComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftLoaderModule
        ],
        providers: [
          StatsService,
          RendererService,
          ObjLoaderService
        ]
      });
      fixture = TestBed.createComponent(ObjLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', waitForAsync(() => {
      component = fixture.componentInstance;
      component.model = '/assets/model/smiley/smiley.obj';
      component.material = '/assets/model/smiley/smiley.mtl';
      fixture.detectChanges();
      expect(component).toBeTruthy();
      fixture.detectChanges();
    }));

  });
});
