import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../../stats';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {
  FontService,
  IconService,
  ModelService,
  ObjLoaderService,
  PlaneMeshComponent,
  SvgLoaderService,
  TextMeshComponent
} from '../../../object';

import {ActorRepositoryService} from '../service';
import {RaycasterService} from '../../../raycaster';
import {DagreLayoutComponent} from './dagre-layout.component';
import {DagreCompositionComponent} from './dagre-composition.component';

describe('dagre-layout', () => {

  describe('DagreCompositionComponent', () => {
    let component: DagreCompositionComponent;
    let fixture: ComponentFixture<DagreCompositionComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          DagreCompositionComponent,
          PlaneMeshComponent,
          TextMeshComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          FontService,
          ActorRepositoryService,
          ModelService,
          DagreLayoutComponent,
          RaycasterService,
          ObjLoaderService,
          SvgLoaderService,
          IconService
        ]
      });
      fixture = TestBed.createComponent(DagreCompositionComponent);
      TestBed.compileComponents();
    });

    it('init', () => {
      component = fixture.componentInstance;
      component.height = 10;
      fixture.detectChanges();
      expect(component).toBeTruthy();

      component.ngOnInit();
      component.ngOnChanges({});
      component.ngOnDestroy();

    });

  });

});
