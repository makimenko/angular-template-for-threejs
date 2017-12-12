import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree'
})
export class DegreePipe implements PipeTransform {

  /**
   * Converts degrees to radians
   * @param degree Degrees
   */
  transform(degree: number): number {
    return (degree / 180) * Math.PI;
  }

}
