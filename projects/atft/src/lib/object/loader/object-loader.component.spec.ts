import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftLoaderModule} from './atft-loader.module';
import {ObjectLoaderComponent} from './object-loader.component';

describe('loader', () => {
  describe('ObjectLoaderComponent', () => {
    let component: ObjectLoaderComponent;
    let fixture: ComponentFixture<ObjectLoaderComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftLoaderModule
        ],
        providers: [
          RendererService
        ]
      });
      fixture = TestBed.createComponent(ObjectLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', async(() => {
      component = fixture.componentInstance;
      component.model = 'x';
      fixture.detectChanges();

      expect(component).toBeTruthy();
      fixture.detectChanges();
    }));

  });
});
