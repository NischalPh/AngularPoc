import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCodePipe',
  standalone: true
})
export class CountryCodePipePipe implements PipeTransform {

  transform(value: string, countryName: string): string {
    if (countryName === 'Nepal') {
      return '+977' + value;
    }
    return '+1' + value;
  }

}
