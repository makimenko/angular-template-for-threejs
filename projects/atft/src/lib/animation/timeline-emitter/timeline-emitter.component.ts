import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges
} from '@angular/core';
import {EmitStepComponent} from "./emit-step.component";

@Component({
  selector: 'atft-timeline-emitter',
  template: '<ng-content></ng-content>'
})
export class TimelineEmitterComponent implements AfterViewInit, OnDestroy, OnChanges, OnInit {

  @ContentChildren(EmitStepComponent, {descendants: true}) emitSteps!: QueryList<EmitStepComponent>;
  @Input() autostart = false;

  constructor() {
    console.log('TimelineEmitterComponent.constructor');
  }

  public ngAfterViewInit() {
    console.log('TimelineEmitterComponent.ngAfterViewInit', this.emitSteps);
    if (this.autostart) {
      this.start()
    }
  }

  ngOnDestroy(): void {
    console.log('TimelineEmitterComponent.ngOnDestroy');
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('TimelineEmitterComponent.ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('TimelineEmitterComponent.ngOnInit', this.emitSteps);
  }

  public start() {
    console.log('TimelineEmitterComponent.start');
    this.emitSteps?.forEach(i => {
      console.log('TimelineEmitterComponent.start setTimeout on', i.ms);
      setTimeout(() => {
        i.action.emit()
      }, i.ms)
    })
  }

}
