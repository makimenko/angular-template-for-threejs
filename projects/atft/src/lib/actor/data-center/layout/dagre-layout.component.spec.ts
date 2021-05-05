import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../../stats';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {FontService, IconService, ModelService, ObjLoaderService, SvgLoaderService} from '../../../object';

import {ActorRepositoryService} from '../service';
import {DagreLayoutComponent} from './dagre-layout.component';
import {RaycasterService} from '../../../raycaster';

describe('dagre-layout', () => {

  describe('DagreLayoutComponent', () => {
    let component: DagreLayoutComponent;
    let fixture: ComponentFixture<DagreLayoutComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          DagreLayoutComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          FontService,
          ActorRepositoryService,
          ModelService,
          RaycasterService,
          DagreLayoutComponent,
          ObjLoaderService,
          SvgLoaderService,
          IconService
        ]

      });
      fixture = TestBed.createComponent(DagreLayoutComponent);
      TestBed.compileComponents();
    });

    it('init', () => {
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();

      component.ngOnChanges({});
      component.ngOnDestroy();

    });

  });

});
