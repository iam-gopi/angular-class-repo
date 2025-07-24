import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Firstservice } from './firstservice';
import { Apiservice } from './apiservice';
import { RegisterData } from './registerdata';
import { Hello } from '../hello/hello';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  // a = 'favicon.ico';
  // protected title = 'first';
  // parentmessage: string = 'This is from parent';
  // a: any;
  // myform: FormGroup;
  // formData: RegisterData | null = null;
  // name: string = 'Angular';
  // fruits = ['Apple', 'orange'];
  // isLoggedId = true;
  // value: string = '40';
  // constructor(
  //   private firstService: Firstservice,
  //   private api: Apiservice,
  //   private fb: FormBuilder
  // ) {
  //   this.myform = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }
  // // handleReceivedData(data: string) {
  // //   console.log(data);
  // // }
  // ngOnInit() {
  //   // console.log(this.firstService.wel());
  //   this.a = this.api.get().subscribe((x) => {
  //     console.log(x);
  //   });
  //   console.log(this.a);
  // }
  // formSubmitHandler() {
  //   console.log('from');
  //   if (this.myform.invalid) {
  //     alert(
  //       'Form data are not valid. all fields are mandatory and enter proper data'
  //     );
  //     return;
  //   }
  //   this.formData = this.myform.value;
  //   this.api.post(this.formData).subscribe((x) => console.log(x));
  // }
}
