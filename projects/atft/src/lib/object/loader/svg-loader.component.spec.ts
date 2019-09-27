import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftLoaderModule} from './atft-loader.module';
import {SVGLoaderComponent} from './svg-loader.component';

describe('loader', () => {
  describe('SVGLoaderComponent', () => {
    let component: SVGLoaderComponent;
    let fixture: ComponentFixture<SVGLoaderComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftLoaderModule
        ],
        providers: [
          RendererService
        ]
      });
      fixture = TestBed.createComponent(SVGLoaderComponent);
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
