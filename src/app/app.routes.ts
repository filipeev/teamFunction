import { Routes } from '@angular/router'
import { LobbyComponent } from './home/lobby/lobby.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';


// import { AuthGuard } from "./authGuard.service";

export const ROUTES: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent},
  { path: "room/:roomKey", component: RoomComponent}
//   { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];
