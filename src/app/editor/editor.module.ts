import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimationService, RendererService, StatsService } from 'atft';
import { AtftDataCenterActorModule } from '../../../projects/atft/src/lib/actor/data-center';
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { EditorContentComponent } from './editor-content/editor-content.component';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';



@NgModule({
  imports: [
    CommonModule,
    AtftModule,
    AtftDataCenterActorModule,
    MatToolbarModule
  ],
  declarations: [
    EditorLayoutComponent,
    EditorContentComponent,
    EditorToolbarComponent
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
