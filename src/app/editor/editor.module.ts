import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimationService, RendererService, StatsService } from 'atft';
import { AtftDataCenterActorModule } from '../../../projects/atft/src/lib/actor/data-center';
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { EditorContentComponent } from './editor-content/editor-content.component';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';
import { EditorSideComponent } from './editor-side/editor-side.component';
import { EditorCanvasComponent } from './editor-canvas/editor-canvas.component';



@NgModule({
  imports: [
    CommonModule,
    AtftModule,
    AtftDataCenterActorModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    EditorLayoutComponent,
    EditorContentComponent,
    EditorToolbarComponent,
    EditorSideComponent,
    EditorCanvasComponent
  ],
  exports: [
    EditorLayoutComponent,
    EditorContentComponent,
    EditorToolbarComponent
  ],
  providers: [
    AnimationService,
    RendererService,
    StatsService
  ]
})
export class EditorModule { }
