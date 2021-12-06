import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    // returns an empty array if the array is null 
    if (!items) {
      return [];
    }

    // wil return the original array if the search text is empty
    if (!searchText) {
      return items;
    }

    // converts the search text to lowercase 
    searchText = searchText.toLocaleLowerCase();

    // returns the filtered array
    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}