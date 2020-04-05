import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { HttpParams } from '@angular/common/http';
import { ApiService } from './../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: any = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const body = new HttpParams()
      .set('username', this.loginForm.controls.username.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

    this.apiService.login(body.toString()).subscribe(data => {
      window.sessionStorage.setItem('token', JSON.stringify(data));
      this.router.navigate(['list-user']);
    }, error => {
        alert(error.error.error_description);
    });
  }

  ngOnInit() {
    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}
