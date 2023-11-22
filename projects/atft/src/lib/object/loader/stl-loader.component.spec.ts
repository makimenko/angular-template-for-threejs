import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IconService, SvgLoaderService} from './services';
import {SVGLoaderComponent} from './svg-loader.component';
import {StatsService} from '../../stats';
import {StlLoaderComponent} from './stl-loader.component';

describe('loader', () => {

  describe('StlLoaderComponent', () => {
    let component: StlLoaderComponent;
    let fixture: ComponentFixture<StlLoaderComponent>;

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
      fixture = TestBed.createComponent(StlLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', (() => {
      component = fixture.componentInstance;
      component.model = '/assets/model/Menger_sponge_sample.stl';
      component.materialColor = '#ff0000';
      fixture.detectChanges();
      component.ngOnInit();

      expect(component).toBeTruthy();
    }));

  });

});
