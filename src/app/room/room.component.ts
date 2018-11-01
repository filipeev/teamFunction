import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase'
import { Room } from '../models/room.model';

@Injectable()
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  roomKey: number;
  private sub: any;
  public room: Room = new Room("", "", "","",0,0,"")
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.roomKey = params['roomKey'];
      console.log('supose to be the key: ', this.roomKey)
      this.consultaSala().then((retorno: Room) => this.room = retorno)
   });
  }

  public consultaSala(): Promise<Room> {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("rooms/" + this.roomKey)
        .once("value")
        .then((snapshot: any) => {
          console.log("consulta publicacoes: ", snapshot.val());
          resolve(snapshot.val());
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
