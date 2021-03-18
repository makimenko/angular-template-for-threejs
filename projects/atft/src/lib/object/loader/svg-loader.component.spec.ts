import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AtftLoaderModule} from './atft-loader.module';
import {IconService, SvgLoaderService} from './services';
import {SVGLoaderComponent} from './svg-loader.component';
import {StatsService} from '../../stats';

describe('loader', () => {
  describe('SVGLoaderComponent', () => {
    let component: SVGLoaderComponent;
    let fixture: ComponentFixture<SVGLoaderComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftLoaderModule
        ],
        providers: [
          StatsService,
          RendererService,
          SvgLoaderService,
          IconService
        ]
      });
      fixture = TestBed.createComponent(SVGLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', waitForAsync(() => {
      component = fixture.componentInstance;
      component.model = 'x';
      fixture.detectChanges();

      expect(component).toBeTruthy();
      fixture.detectChanges();
    }));

  });
});
