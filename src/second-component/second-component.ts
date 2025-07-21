// import { Component } from '@angular/core';
// import {
//   FormArray,
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';

// @Component({
//   selector: 'app-second-component',
//   imports: [ReactiveFormsModule],
//   templateUrl: './second-component.html',
//   styleUrl: './second-component.css',
// })
// export class SecondComponent {
//   loginForm: FormGroup;
//   data: FormArray;

//   // name = 'Gopi';
//   // val = 'this is the text box value';

//   // btnClickHandler() {
//   //   console.log('Button clicked');
//   // }

//   // loginForm = new FormGroup({
//   //   username: new FormControl('', [Validators.email, Validators.required]),
//   //   password: new FormControl('', [
//   //     Validators.required,
//   //     Validators.minLength(6),
//   //   ]),
//   // });

//   constructor(private fb: FormBuilder) {
//     // this.loginForm = new FormGroup({
//     //   username: new FormControl('', [Validators.email, Validators.required]),
//     //   password: new FormControl('', [
//     //     Validators.required,
//     //     Validators.minLength(6),
//     //   ]),
//     // });

//     this.loginForm = this.fb.group({
//       username: ['', Validators.email, Validators.required],
//       password: ['', Validators.required, Validators.minLength(6)],
//       data: this.fb.array([]),
//     });
//   }

//   addConfirmPassword() {
//     this.data.push(
//       this.fb.control('', [Validators.required, Validators.minLength(6)])
//     );
//   }

//   removeConfirmPassword() {
//     this.data.removeAt(0);
//   }

//   submitHandler() {
//     if (this.loginForm.valid) {
//       console.log(this.loginForm.value);
//     } else {
//       console.log('Form has some problem. please fix it');
//     }
//   }
// }
