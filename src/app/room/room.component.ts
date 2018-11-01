import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  roomKey: number;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.roomKey = params['roomKey'];
      console.log('supose to be the key: ', this.roomKey)
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
