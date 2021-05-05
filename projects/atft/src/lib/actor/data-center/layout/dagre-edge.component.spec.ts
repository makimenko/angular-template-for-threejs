import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../../stats';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {FontService, IconService, ModelService, ObjLoaderService, SvgLoaderService} from '../../../object';

import {ActorRepositoryService} from '../service';
import {RaycasterService} from '../../../raycaster';
import {DagreEdgeComponent, EdgeType} from './dagre-edge.component';
import {DagreLayoutComponent} from './dagre-layout.component';

describe('dagre-layout', () => {

  describe('DagreEdgeComponent', () => {
    let component: DagreEdgeComponent;
    let fixture: ComponentFixture<DagreEdgeComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          DagreEdgeComponent
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
      fixture = TestBed.createComponent(DagreEdgeComponent);
      TestBed.compileComponents();
    });

    it('init', () => {
      component = fixture.componentInstance;
      component.type = EdgeType.association;
      fixture.detectChanges();
      expect(component).toBeTruthy();

      component.ngOnChanges({});
      component.ngOnDestroy();

    });

  });

});
