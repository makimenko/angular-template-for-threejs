import {NgModule} from '@angular/core';
import {AnimationService} from './animation.service';
import {EmitStepComponent, TimelineEmitterComponent} from "./timeline-emitter";


@NgModule({
  declarations: [
    TimelineEmitterComponent,
    EmitStepComponent,
  ],
  providers: [
    AnimationService,
  ],
  exports: [
    TimelineEmitterComponent,
    EmitStepComponent,
  ],
})
export class AtftAnimationModule {
}
