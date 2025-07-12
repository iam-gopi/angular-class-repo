import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from '../hello/hello';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first';
}
