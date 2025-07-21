import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Firstservice {
  constructor() {}

  wel() {
    return 'from service ';
  }
}
