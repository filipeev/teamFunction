import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'teamFunction';

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
  }
}
