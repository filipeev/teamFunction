import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase'
import { Room } from '../models/room.model';
import { Usuario } from '../models/usuario.model';
import { Auth } from '../auth.service';

@Injectable()
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  roomKey: number;
  private sub: any;
  public members: Usuario[];
  public room: Room = null
  
  constructor(private route: ActivatedRoute, private auth: Auth) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.roomKey = params['roomKey'];
      this.consultaSala().then((retorno: Room) => {
        this.room = retorno
        console.log('room: ', retorno)
        this.updateRoom(true)
      })
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

  public updateRoom(joined: boolean) {
    console.log('say it all: ', this.room.members, this.auth.userLogged)
    if (joined) {
      let alrdyInRoom = this.room.members.filter((usr: Usuario) => usr.user === this.auth.userLogged.user)
      console.log("alrdyInRoom: ", alrdyInRoom)
      if (alrdyInRoom.length === 0) {
        this.room.members.push(this.auth.userLogged)
      }
    } else {
      let auxAr = this.room.members.filter((usr: Usuario) => usr.user !== this.auth.userLogged.user)
      this.room.members = auxAr
      // this.room.members--
    }
    console.log('members: ', this.room.members)
    return firebase.database().ref('rooms/' + this.roomKey).update(this.room);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.updateRoom(false)
  }

}
