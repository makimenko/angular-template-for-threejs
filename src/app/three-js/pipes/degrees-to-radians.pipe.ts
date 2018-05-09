import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deg2rad'
})
export class DegreesToRadiansPipe implements PipeTransform {

  /**
   * Converts degrees to radians
   * @param degree Degrees
   */
  transform(degrees: number): number {
    return (degrees / 180) * Math.PI;
  }

}
