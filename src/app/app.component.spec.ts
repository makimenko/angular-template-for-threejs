import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ThreeWrapperModule } from 'three-wrapper';
import { ThreeExamplesModule } from './three-examples/three-examples.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        ThreeExamplesModule,
        ThreeWrapperModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
