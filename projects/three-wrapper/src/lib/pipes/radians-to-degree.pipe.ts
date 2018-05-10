import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rad2deg'
})
export class RadiansToDegreePipe implements PipeTransform {

  /**
   * Converts radians to degrees
   * @param radians Radians
   */
  transform(radians: number): number {
    return radians * (180 / Math.PI);
  }

}
