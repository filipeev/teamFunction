import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './home/lobby/lobby.component';
import { RoomComponent } from './room/room.component';
import { ChatComponent } from './room/chat/chat.component';
import { CodeComponent } from './room/code/code.component';
import { Auth } from './auth.service';
import { AuthGuard } from './authGuard.service';
import { RouterModule} from '@angular/router';

import { ROUTES } from "./app.routes";
import { HomeComponent } from './home/home.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobbyComponent,
    RoomComponent,
    ChatComponent,
    CodeComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Auth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
