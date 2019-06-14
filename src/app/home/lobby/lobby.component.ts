import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.sass']
})
export class LobbyComponent implements OnInit {
  public rooms: any[] = []
  private roomMax = 10
  constructor(private router: Router) { }

  ngOnInit() {
    this.consultaSalas()
      .then((result: any[]) => { 
        console.log('result: ', result)
        this.rooms = result
      })
  }

  public consultaSalas(): Promise<any> {
    return new Promise((resolve, reject) => {
      let roomsRet: Array<any> = [];
      firebase
        .database()
        .ref("rooms/")
        .orderByKey()
        .once("value")
        .then((snapshot: any) => {
          console.log("consulta publicacoes: ", snapshot.val());
          snapshot.forEach(childSnapshot => {
            let room = childSnapshot.val();
            roomsRet.push(room)
          });
          resolve(roomsRet);
        });
    });
  }

  // public fullRoom(roomQnt: number): boolean {
  //   console.log(roomQnt)
  //   return roomQnt > this.roomMax
  // }

  public openRoom(roomKey: string): void {
    let selectedRoom = this.rooms.filter((room: Room) => room.key == roomKey)
    if (selectedRoom[0].members.length < this.roomMax) {
      this.router.navigate(["/room", roomKey])
    } else {
      alert('Sorry, the room is full! '+ selectedRoom[0].members.length +'')
    }
  }

}
