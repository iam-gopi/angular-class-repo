import { Component } from '@angular/core';
import { SecondComponent } from '../second-component/second-component';

@Component({
  selector: 'app-hello',
  imports: [SecondComponent],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {}
