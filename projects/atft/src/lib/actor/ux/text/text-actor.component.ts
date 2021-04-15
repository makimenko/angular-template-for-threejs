import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {provideParent} from '../../../util';
import {EmptyComponent} from '../../../object/helper';
import {AnimationService} from '../../../animation';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';
import {Subscription} from 'rxjs';

@Component({
  selector: 'atft-text-actor',
  providers: [provideParent(TextActorComponent)],
  template: `
    <atft-text-mesh [text]="currentText" [centered]="false" [materialColor]="materialColor">
    </atft-text-mesh>
  `
})
export class TextActorComponent extends EmptyComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  text: string;

  @Input()
  animate = false;

  @Input()
  materialColor = '0x5DADE2';

  @Input()
  minDelay = 5;

  @Input()
  maxDelay = 10;

  subscribed = false;

  private currentDelay: number;
  private currentText: string;
  private currentPos = 0;
  private maxPos = 0;
  private i = 0;
  protected animation: Subscription;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService
  ) {
    super(rendererService, parent);
  }

  public ngAfterViewInit() {
    super.ngAfterViewInit();
    // console.log('TextActorComponent.ngAfterViewInit');
    this.updateText();
  }

  protected updateText() {
    // console.log('TextActorComponent.updateText');
    if (this.text && this.text.length > 0) {
      // console.log('TextActorComponent.updateText', this.text);
      if (this.animate) {
        // console.log('TextActorComponent.animate init');
        if (!this.subscribed) {
          this.updateAnimation = this.updateAnimation.bind(this);
          this.animation = this.animationService.animate.subscribe(this.updateAnimation);
          this.subscribed = true;
          this.animationService.start();
        }

        this.currentPos = 0;
        this.maxPos = this.text.length;
        this.currentText = '';
        this.currentDelay = this.randomInt(this.minDelay, this.maxDelay);
      } else {
        this.currentText = this.text;
      }
    }
  }

  public ngOnDestroy() {
    // console.log('TextActorComponent.ngOnDestroy');
    super.ngOnDestroy();
    this.done();
  }

  public updateAnimation() {
    if (this.subscribed) {
      // console.log('TextActorComponent.updateAnimation');
      this.i++;
      if (this.i % this.currentDelay === 0) {
        // console.log('TextActorComponent.updateAnimation: step');
        this.currentPos++;
        if (this.currentPos <= this.maxPos) {
          this.currentText = this.text.substr(0, this.currentPos);
          this.currentDelay = this.randomInt(this.minDelay, this.maxDelay);
          // this.rendererService.render();
          // console.log('TextActorComponent.updateAnimation: text', this.currentText);
        } else {
          this.done();
        }
      }
    }
  }

  public done() {
    if (this.subscribed) {
      // console.log('TextActorComponent.done');
      this.subscribed = false;
      this.i = 0;
      this.animation?.unsubscribe();
    }
  }

  private randomInt(min, max): number {
    return Math.round(Math.random() * (max - min) + min);
  }


  public ngOnChanges(changes: SimpleChanges) {
    // console.log('AbstractObject3D.ngOnChanges', this.name);
    if (!this.object) {
      return;
    }
    super.ngOnChanges(changes);

    let modified = false;

    if (['text'].some(propName => propName in changes)) {
      this.updateText();
      modified = true;
    }

    if (['animate'].some(propName => propName in changes)) {
      if (this.animate) {
        this.updateText();
      } else {
        this.done();
        this.currentText = this.text;
      }
      modified = true;
    }

    if (modified) {
      this.changed.emit();
      this.rendererService.render();
    }

  }


}
