import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCanvasComponent } from './editor-canvas.component';

describe('EditorCanvasComponent', () => {
  let component: EditorCanvasComponent;
  let fixture: ComponentFixture<EditorCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
