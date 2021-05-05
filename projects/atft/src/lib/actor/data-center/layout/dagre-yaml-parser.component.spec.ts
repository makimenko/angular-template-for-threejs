import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../../stats';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {FontService, IconService, ModelService, ObjLoaderService, SvgLoaderService} from '../../../object';
import {DagreYamlParserComponent} from './dagre-yaml-parser.component';
import {ActorRepositoryService} from '../service';
import {DagreLayoutComponent} from './dagre-layout.component';
import {RaycasterService} from '../../../raycaster';

const sampleYaml = `
compositions:
  - name: backend
    label: Backend
    border: frame
  - name: data
    label: Data Layer
    composition: backend

nodes:
  - name: user
    model: user
  - name: spa
    type: compact
    icon: connected_tv
  - name: api
    icon: video_settings
    composition: backend
  - name: db1
    label: PostgreSQL
    type: barrel
    composition: data
  - name: db2
    label: MongoDB
    type: barrel
    composition: data

edges:
  - from: user
    to: spa
  - from: spa
    to: api
  - from: api
    to: db1
  - from: api
    to: db2
`;

describe('dagre-layout', () => {

  describe('DagreYamlParserComponent', () => {
    let component: DagreYamlParserComponent;
    let fixture: ComponentFixture<DagreYamlParserComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          DagreYamlParserComponent,
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
      fixture = TestBed.createComponent(DagreYamlParserComponent);
      TestBed.compileComponents();
    });

    it('init', (done) => {
      component = fixture.componentInstance;
      fixture.detectChanges();

      component.yaml = sampleYaml;
      component.status.subscribe((status) => {
        expect(status).toBeTrue();
        done();
      });
      fixture.detectChanges();
      component.parseAndCreate();
    });

  });

});
