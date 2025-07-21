import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Firstservice } from './firstservice';
import { Apiservice } from './apiservice';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first';
  parentmessage: string = 'This is from parent';
  a: any;
  // name: string = 'Angular';
  // fruits = ['Apple', 'orange'];
  // isLoggedId = true;
  // value: string = '40';

  constructor(private firstService: Firstservice, private api: Apiservice) {}

  // handleReceivedData(data: string) {
  //   console.log(data);
  // }

  ngOnInit() {
    // console.log(this.firstService.wel());
    this.a = this.api.get().subscribe((x) => {
      console.log(x);
    });
    console.log(this.a);
  }
}
