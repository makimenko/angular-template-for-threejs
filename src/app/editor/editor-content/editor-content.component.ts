import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'atft';

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {

  public title = 'app';
  public rotationX = 0.0;
  public rotationY = 0.0;
  public rotationZ = 0.0;
  public translationY = 0.0;
  public cameraPositionX = 20.0;

  constructor(private animation: AnimationService) {
    this.animation.start();
  }

  ngOnInit(): void {
  }

  public mouseEnter() {
    console.log('mouseEnter');
  }

  public click() {
    console.log('click');
  }

  public mouseExit() {
    console.log('mouseExit');
  }

}
