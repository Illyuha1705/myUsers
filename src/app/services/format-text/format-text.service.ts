import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatTextService {
  toLowerCaseString(string: string): string {
    return string.toLocaleLowerCase();
  }

  sliceString(str: string, from: number, till: number): string {
    return str.slice(from, till) + '...';
  }
}
