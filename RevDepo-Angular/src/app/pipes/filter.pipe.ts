import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    /**
     * The pipe will filter the list of elements base on the search text that will be provided
     */

    // returns an empty array if the array is null 
    if (!items) {
      return [];
    }

    // wil return the original array if the search text is empty
    if (!searchText) {
      return items;
    }

    // converts the search text to lowercase 
    // searchText = searchText.toLowerCase();

    // returns the filtered array
    // return items.filter(it => {
    //   return it.toLowerCase().includes(searchText);
    // });

    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });

    
  }
}