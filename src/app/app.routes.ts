import { Routes } from '@angular/router'
import { LobbyComponent } from './home/lobby/lobby.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { AuthGuard } from './authGuard.service';
import { RegisterComponent } from './register/register.component';


// import { AuthGuard } from "./authGuard.service";

export const ROUTES: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  { path: "room/:roomKey", component: RoomComponent, canActivate: [AuthGuard]}
//   { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];
