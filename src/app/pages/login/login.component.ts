
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from './service/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthStore

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     // Handle form submission here
  //     console.log('Form data submitted:', this.loginForm.value);
  //     this.router.navigate(["/admin"])
  //   }
  // }

  onSubmit() {
    const val = this.loginForm.value
    this.auth.login(val.username, val.password)
      .subscribe({
        next: () => {
          this.router.navigate(["/admin"])
        },
        error: () => {

          alert("Login Failed!")
        }


      })
  }

}
