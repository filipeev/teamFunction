import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.params['roomKey'])
  }

}
