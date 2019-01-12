import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoCC'
})
export class FormatoCCPipe implements PipeTransform {

  transform(numero: number): string {
    const number = numero + '';
    const section1 = number.slice(0, 4);
    const section2 = number.slice(4, 8);
    const section3 = number.slice(8, 12);
    const section4 = number.slice(12, 16);
    return section1 + '-' + section2 + '-' + section3 + '-' + section4;
  }

}
