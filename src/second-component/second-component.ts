import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
})
export class SecondComponent {
  name = 'Gopi';
  val = 'this is the text box value';

  btnClickHandler() {
    console.log('Button clicked');
  }
}
