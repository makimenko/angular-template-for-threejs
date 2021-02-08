import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorContentComponent } from './editor-content.component';

describe('EditorContentComponent', () => {
  let component: EditorContentComponent;
  let fixture: ComponentFixture<EditorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
