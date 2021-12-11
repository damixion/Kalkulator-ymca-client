import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultPercent'
})
export class ResultPercentPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(2) + "%";
  }

}
