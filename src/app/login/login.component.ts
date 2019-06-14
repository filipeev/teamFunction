import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Auth } from '../auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public returnedMessage: string;
  public formLogin = this.fb.group({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) { }

  ngOnInit() {
    // if (this.auth.autenticado()) {
    //   this.auth.getUser().then((usr: Usuario) => this.auth.userLogged = usr)
    //   this.router.navigate(["/home"]);
    // }
  }

  public Login(): void {
    // tratando mensagem de login retornada do Firebase
    this.auth.autentica(this.formLogin.value.user, this.formLogin.value.password).then((message) => {this.returnedMessage = message});
    // console.log(message, this.auth.userLogged)
  }

}
