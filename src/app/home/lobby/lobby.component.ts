import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.sass']
})
export class LobbyComponent implements OnInit {
  public rooms: any[] = []
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

  public openRoom(roomKey: string): void {
    console.log('supose to open room: ', roomKey)
    this.router.navigate(["/room", roomKey])
  }

}
