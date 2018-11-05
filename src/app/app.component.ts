import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { Usuario } from './models/usuario.model';
import { Auth } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'teamFunction';
  public userLogged = new Usuario('sample@email', 'nome completo', 'usuario', '');
  // private stackLogin = 0
  constructor(private auth: Auth, private router: Router) {}

  // public userInfo(): void {
    
  //   const user = firebase.auth().currentUser;
  //   if (user === null && this.stackLogin < 10) {
  //     this.stackLogin++
  //     setTimeout(() => {
  //       this.userInfo();
  //     }, 200);
  //   } else {
  //     this.userLogged.email = user.email;
  //   }
  //   console.log('User: ', user);
  // }

  ngOnInit(): void {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB-Vs6hikLGBFZvPl_CISv5m2ln_5b4iC4",
      authDomain: "teamfunction93.firebaseapp.com",
      databaseURL: "https://teamfunction93.firebaseio.com",
      projectId: "teamfunction93",
      storageBucket: "teamfunction93.appspot.com",
      messagingSenderId: "948273755035"
    };
    firebase.initializeApp(config);

    // validate if user is auth
    
  }
}
