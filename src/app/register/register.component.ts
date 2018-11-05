import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Auth } from '../auth.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: Auth) { }
  
  public formRegister = this.fb.group({
    name: new FormControl(''),
    user: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public registerUser(): void {
    let user = new Usuario(
      this.formRegister.value.email,
      this.formRegister.value.name,
      this.formRegister.value.user,
      this.formRegister.value.password,
    );
    this.auth.registerUser(user).then((login: any) => {
      console.log(login)
      this.auth.autentica(user.email, user.password)
    })
  }

  ngOnInit() {
  }


}
