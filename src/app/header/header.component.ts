import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private appComp: AppComponent, private auth: Auth) { }
  
  ngOnInit() {
  }

  public logOut(): void {
    this.auth.logOut()
  }
}
