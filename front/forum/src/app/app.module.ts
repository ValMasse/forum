import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { SujetComponent } from './components/sujet/sujet.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SujetsComponent } from './pages/sujets/sujets.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { HeaderComponent } from './partials/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailSujetComponent } from './pages/detail-sujet/detail-sujet.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    SujetComponent,
    AccueilComponent,
    SujetsComponent,
    ErreurComponent,
    HeaderComponent,
    DetailSujetComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
