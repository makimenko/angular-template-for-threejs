import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import {provideParent} from "../../util";

@Component({
  selector: 'atft-emit-step',
  providers: [provideParent(EmitStepComponent)],
  template: '<ng-content></ng-content>'
})
export class EmitStepComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() ms!: number;
  @Output() action = new EventEmitter<any>();


  constructor() {
    console.log('EmitStepComponent.constructor');
  }

  public ngAfterViewInit() {
    console.log('EmitStepComponent.ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('EmitStepComponent.ngOnDestroy');
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('EmitStepComponent.ngOnChanges', changes);
  }

}
