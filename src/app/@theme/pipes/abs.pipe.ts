import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abs' })
export class AbsPipe implements PipeTransform {

  transform(input: number): number {
    return Math.abs(input);
  }
}
