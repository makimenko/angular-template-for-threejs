import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AtftLoaderModule} from './atft-loader.module';
import {ObjectLoaderComponent} from './object-loader.component';
import {StatsService} from '../../stats';

describe('loader', () => {
  describe('ObjectLoaderComponent', () => {
    let component: ObjectLoaderComponent;
    let fixture: ComponentFixture<ObjectLoaderComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftLoaderModule
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(ObjectLoaderComponent);
      return TestBed.compileComponents();
    }));

    it('load', waitForAsync(() => {
      component = fixture.componentInstance;
      component.model = '/assets/model/Server.json';
      fixture.detectChanges();

      expect(component).toBeTruthy();
      fixture.detectChanges();
    }));

  });
});
