import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Hello } from '../hello/hello';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Hello],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first';
  parentmessage: string = 'This is from parent';
  // name: string = 'Angular';
  // fruits = ['Apple', 'orange'];
  // isLoggedId = true;
  // value: string = '40';

  handleReceivedData(data: string) {
    console.log(data);
  }
}
