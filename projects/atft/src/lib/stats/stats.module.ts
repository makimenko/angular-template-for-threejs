import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsService} from './stats.service';
import {StatsAutoShowDirective} from './stats-auto-show.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StatsService
  ],
  declarations: [
    StatsAutoShowDirective
  ],
  exports: [
    StatsAutoShowDirective
  ]
})
export class AtftStatsModule {
}
