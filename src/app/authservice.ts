import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  constructor() {}

  isLoggedIn() {
    return false;
  }
}
