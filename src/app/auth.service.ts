import { Usuario } from "./models/usuario.model";
import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Auth {
  public token_id: string;

  constructor(private router: Router) {}

//   public cadastrarUsuario(usuario: Usuario): Promise<any> {
//     return firebase
//       .auth()
//       .createUserWithEmailAndPassword(usuario.email, usuario.senha)
//       .then((resposta: any) => {
//         console.log(resposta);

//         delete usuario.senha;

//         firebase
//           .database()
//           .ref(`usuario_detalhe/${btoa(usuario.email)}`)
//           .set(usuario);
//       })
//       .catch((error: Error) => console.log(error));
//   }
  public autentica(email: string, senha: string): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado: any) => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((idToken: string) => {
            console.log(idToken);
            this.token_id = idToken;
            localStorage.setItem("idToken", this.token_id);
            this.router.navigate(["/home"]);
          });
      })
      .catch((error: Error) => console.log(error));
  }
//   public autenticado(): boolean {
//     if (
//       this.token_id === undefined &&
//       localStorage.getItem("idToken") !== undefined
//     ) {
//       this.token_id = localStorage.getItem("idToken");
//     }
//     if( this.token_id === undefined || this.token_id === null){
//       this.router.navigate(['/']);
//     }
//     return this.token_id !== undefined;
//   }
//   public logOut(): void {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         localStorage.removeItem("idToken");
//         this.token_id = undefined;
//         this.router.navigate(["/"]);
//       });
//   }
}
