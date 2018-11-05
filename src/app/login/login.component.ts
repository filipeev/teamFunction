import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Auth } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public formLogin = this.fb.group({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) { }

  ngOnInit() {
    if (this.auth.autenticado()) {
      this.router.navigate(["/home"]);
    }
  }

  public Login(): void {
    console.log(this.formLogin.value)
    this.auth.autentica(this.formLogin.value.user, this.formLogin.value.password)
  }

}
