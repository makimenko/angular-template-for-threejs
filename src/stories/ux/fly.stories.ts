import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';

const modelPath = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/';

@Component({
  template: `
    <atft-renderer-canvas>
      <atft-perspective-camera [zAxisUp]="true" positionX=0 positionY=50 [positionZ]=z>
      </atft-perspective-camera>

      <!-- Foreground -->
      <atft-scene name="scene" background="0x000000" atft-stats-auto-show>

        <atft-ambient-light color="0xFFFFFF" intensity="0.4"></atft-ambient-light>

        <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                          translateZ=90></atft-point-light>
        <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor text="Introducing Angular Template for Three.js" translateX="-200" translateY="50" translateZ="-50"
                         [animate]="false" [minDelay]="5" [maxDelay]="5" materialColor="0x303030"
                         [scaleX]="0.5" [scaleY]="0.5"
                         atft-dashed-draw dashColor="0x303030" [dashIncrement]="30"
        >
        </atft-text-actor>

        <atft-text-actor text="Hello, World!" translateX="100" translateY="5" [translateZ]="-100"
                         [animate]="false" [minDelay]="10" [maxDelay]="10" materialColor="0x303030"
                         atft-dashed-draw dashColor="0x303030"
        ></atft-text-actor>

        <atft-text-actor [text]="longtext" translateX="-50" [translateY]="100" [translateZ]="-50"
                         [animate]="false" [minDelay]="10" [maxDelay]="10" materialColor="0x303030"
                         [scaleX]="0.3" [scaleY]="0.3" [dashIncrement]="120"
                         atft-dashed-draw dashColor="0x303030"
        ></atft-text-actor>

        <!-- -->
        <atft-obj-loader atft-dashed-draw dashColor="0x303030" [dashIncrement]="30" [initialOpacity]="0.1" [targetOpacity]="0.1"
          model="${modelPath}/SampleArea/Base.obj"
          material="${modelPath}/SampleArea/Base.mtl"
          resourcePath="${modelPath}/">
        </atft-obj-loader>

        <atft-obj-loader atft-dashed-draw dashColor="0x303030" [dashIncrement]="30" [initialOpacity]="0.1" [targetOpacity]="0.1"
                         model="${modelPath}/SampleArea/Zone.obj"
                         material="${modelPath}/SampleArea/Zone.mtl"
                         resourcePath="${modelPath}/">
        </atft-obj-loader>

        <atft-obj-loader atft-dashed-draw dashColor="0x303030" [dashIncrement]="30" [initialOpacity]="0.01" [targetOpacity]="0.01"
                         model="${modelPath}/SampleArea/House1.obj"
                         material="${modelPath}/SampleArea/House1.mtl"
                         resourcePath="${modelPath}/">
        </atft-obj-loader>


      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookFlyComponent implements AfterViewInit {

  @ViewChild(EmptyComponent) box;

  k = 0;
  z = 600;
  longtext = `# Creates a DataFrame based on a table named "people"
# stored in a MySQL database.
url = \\
  "jdbc:mysql://yourIP:yourPort/test?user=yourUsername;password=yourPassword"
df = sqlContext \\
  .read \\
  .format("jdbc") \\
  .option("url", url) \\
  .option("dbtable", "people") \\
  .load()

# Looks the schema of this DataFrame.
df.printSchema()

# Counts people by age
countsByAge = df.groupBy("age").count()
countsByAge.show()

# Saves countsByAge to S3 in the JSON format.
countsByAge.write.format("json").save("s3a://...")`;

  constructor(private animationService: AnimationService) {
  }

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    this.k += 0.005;

    if (this.z > 200) {
      this.z -= this.k;
    }
  }


}

export default {
  title: 'UX / Fly',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
  args: {},
  argTypes: {}
};

export const Fly = (args) => ({
  component: StorybookFlyComponent,
  props: args
});
