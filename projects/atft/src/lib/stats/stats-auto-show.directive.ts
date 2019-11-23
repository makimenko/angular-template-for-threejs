import {AfterViewInit, Directive} from '@angular/core';
import {StatsService} from './stats.service';

@Directive({selector: '[atft-stats-auto-show]'})
export class StatsAutoShowDirective implements AfterViewInit {

  constructor(
    private statsService: StatsService
  ) {

  }

  ngAfterViewInit(): void {
    console.log('AUTO SHOW')
    this.statsService.create();
  }

}
