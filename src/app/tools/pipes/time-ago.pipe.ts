import { Pipe, PipeTransform } from '@angular/core';
import formatDistance from 'date-fns/formatDistance';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string,): string {
    let date = new Date(value)
    let today = new Date()
    return formatDistance(today, date);
  }

}
