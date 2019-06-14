import { Usuario } from "./models/usuario.model";
import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Auth{
  public token_id: string;
  public userLogged: Usuario;

  constructor(private router: Router) {}

  public registerUser(usuario: Usuario): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then((resposta: any) => {
        console.log(resposta);

        delete usuario.password;

        firebase
          .database()
          .ref(`user_details/${btoa(usuario.email)}`)
          .set(usuario)
          .then((user: Usuario) => {
            this.userLogged = user;
          }
          );
      })
      .catch((error: Error) => console.log(error));
  }
  public autentica(email: string, senha: string): Promise<string> {
    let message = firebase.auth().signInWithEmailAndPassword(email, senha).then((resultado: any): string => {
        firebase.auth().currentUser.getIdToken().then((idToken: string) => {
            console.log(idToken);
            this.token_id = idToken;
            localStorage.setItem("idToken", this.token_id);
            this.getUser(email).then((usr: Usuario) => {
              this.userLogged = usr
              console.log('usr: ', usr)
            })
            this.router.navigate(["/home"]);
        })
        return 'bem vindo';
      })
      .catch((error: Error) => {
        console.log(error);
        return error.message
      });
    return Promise.resolve(message);
  }
  public autenticado(): boolean {
    if (this.token_id === undefined && localStorage.getItem("idToken") !== undefined) {
      this.token_id = localStorage.getItem("idToken");
    }
    if( this.token_id === undefined || this.token_id === null){
      this.router.navigate(['/']);
    }
    return this.token_id !== undefined;
  }
  public logOut(): void {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("idToken");
        this.token_id = undefined;
        this.router.navigate(["/"]);
      });
  }
  // public getUser(): Promise<Usuario> {
  //   return new Promise<Usuario>()
  // }
  public getUser(user_email: string): Promise<Usuario> {
    console.log('requesting: user_details/', btoa(user_email))
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("user_details/" + btoa(user_email))
        .once("value")
        .then((snapshot: any) => {
          console.log("consulta user data: ", snapshot.val());
          resolve(snapshot.val());
        });
    });
  }
}
