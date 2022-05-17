import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SujetComponent } from './components/sujet/sujet.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailSujetComponent } from './pages/detail-sujet/detail-sujet.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SujetsComponent } from './pages/sujets/sujets.component';

const routes: Routes = [
  {path: 'sujets', component : SujetsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'sujetDetail/:id', component: DetailSujetComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'error', component: ErreurComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
