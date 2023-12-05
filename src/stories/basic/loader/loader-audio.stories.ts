import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";


@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
      <atft-audio-loader [url]="url" [loop]="loop" [volume]="volume"></atft-audio-loader>
  `)
})
class StorybookAudioComponent {
  @Input() url = "assets/audio/sample1.mp3";
  @Input() volume = 1;
  @Input() loop = false;
}


const meta: Meta<StorybookAudioComponent> = {
  title: 'Basic/Loader/Audio',
  component: StorybookAudioComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {
    loop: {
      description: 'Keep playing forever?',
      control: {
        type: 'boolean'
      }
    },
    url: {
      options: [
        'assets/audio/sample1.mp3',
        'assets/audio/sample2.mp3'
      ],
      control: {
        type: 'select'
      }
    },
  }
};


export default meta;
type Story = StoryObj<StorybookAudioComponent>;

export const Sample1: Story = {
  args: {
    loop: true,
    url: 'assets/audio/sample1.mp3',
    volume: 0.7
  },
};

export const Sample2: Story = {
  args: {
    loop: false,
    url: 'assets/audio/sample2.mp3',
    volume: 1
  },
};
