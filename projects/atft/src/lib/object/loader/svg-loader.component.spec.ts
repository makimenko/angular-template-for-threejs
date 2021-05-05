import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IconService, SvgLoaderService} from './services';
import {SVGLoaderComponent} from './svg-loader.component';
import {StatsService} from '../../stats';
import {ShapePath} from 'three';

describe('loader', () => {

  describe('SVGLoaderComponent', () => {
    let component: SVGLoaderComponent;
    let fixture: ComponentFixture<SVGLoaderComponent>;
    let svgLoaderService: SvgLoaderService;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SVGLoaderComponent
        ],
        providers: [
          StatsService,
          RendererService,
          SvgLoaderService,
          IconService
        ]
      });
      svgLoaderService = TestBed.inject(SvgLoaderService);
      fixture = TestBed.createComponent(SVGLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', ((done) => {
      component = fixture.componentInstance;
      component.icon = 'a:sitemap-solid';
      component.overrideMaterialColor = '#ff0000';
      fixture.detectChanges();

      const mockData = [new ShapePath()];
      const spy = spyOn(svgLoaderService, 'load').and.returnValue(Promise.resolve(mockData));
      component.ngOnInit();

      spy.calls.mostRecent().returnValue.then(() => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.icon).toBe('assets/svg/sitemap-solid.svg');
        expect(component.overrideMaterialColor).toBe('#ff0000');
        done();
      });

    }));

  });

});
