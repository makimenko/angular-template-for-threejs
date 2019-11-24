import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rad2deg'
})
export class Rad2DegPipe implements PipeTransform {

  /**
   * Converts radians to degrees
   * @param radians Radians
   */
  transform(radians: number): number {
    return radians * (180 / Math.PI);
  }

}
