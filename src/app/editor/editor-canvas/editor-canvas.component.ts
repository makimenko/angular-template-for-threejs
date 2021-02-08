import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'atft';

@Component({
  selector: 'app-editor-canvas',
  templateUrl: './editor-canvas.component.html',
  styleUrls: ['./editor-canvas.component.scss']
})
export class EditorCanvasComponent implements OnInit {

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
