import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSideComponent } from './editor-side.component';

describe('EditorSideComponent', () => {
  let component: EditorSideComponent;
  let fixture: ComponentFixture<EditorSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
