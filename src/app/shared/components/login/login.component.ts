import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'mk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.validateLogin(this.form.value);
    }
  }

  private validateLogin(user: User) {
    if (user.username === 'admin' && user.password === 'admin') {
      this.router.navigate(['']);
    } else {
      console.error('Invalid credentials');
    }
  }
}
