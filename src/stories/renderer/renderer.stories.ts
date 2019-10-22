import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AfterViewInit, Component, OnInit} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {defaultSceneWrapper} from '../common/default-scene-wrapper';
import {withKnobs} from '@storybook/addon-knobs';

@Component({
  template: defaultSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff" translateX="15"
    translateZ="7"></atft-box-mesh>
  <atft-plane-mesh height="22" width="42" materialColor="0xffffff" material="phong"
    [rotateZ]="(90 | deg2rad)" [rotateY]="(90 | deg2rad)" translateZ="10">
    <atft-css3d-plane-mesh height="20" width="40" translateZ="0.1"></atft-css3d-plane-mesh>
  </atft-plane-mesh>
  `)
})
class StorybookBoxMeshComponent {

}


@Component({
  template: `
      <div id="player"></div>

  `
})
export class StorybookYoutubeComponent implements AfterViewInit, OnInit {
  player: any;
  private id = 'HSqxlbf3Z7M';


  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    if ((<any>window).YT) {
      console.log('Re-using existing youtube script');
    } else {
      console.log('Attaching youtube script');
      const doc = (<any>window).document;
      const playerApiScript = doc.createElement('script');
      playerApiScript.type = 'text/javascript';
      playerApiScript.src = 'https://www.youtube.com/iframe_api';
      doc.body.appendChild(playerApiScript);
    }
  }

  ngOnInit() {
    console.log('ngOnInit');

    if ((<any>window).YT) {
      console.log('YT already loaded');
      this.createPlayer();
    }
    (<any>window).onYouTubeIframeAPIReady = () => {
      console.log('*** onYouTubeIframeAPIReady');
      this.createPlayer();
    };
  }

  createPlayer() {
    console.log('Create player');
    this.player = new (<any>window).YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: this.id,
      playerVars: {
        'autoplay': 1,
        'rel': 0,
        'controls': 0,
        'loop': 1
      },
      events: {
        'onReady': () => {
          console.log('*** ON READY');
        },
        'onStateChange': (x) => {
          console.log('*** ON STATE CHANGE: ', x);
        }
      }
    });
  }

}


storiesOf('Renderer', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('css3d', () => ({
    component: StorybookBoxMeshComponent
  }))
  .add('youtube', () => ({
    component: StorybookYoutubeComponent
  }))


;



