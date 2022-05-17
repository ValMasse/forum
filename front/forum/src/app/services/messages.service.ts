import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.models';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get<Message[]>(`${environment.API_URL}/messages`);
  }

  public findById(id: string){
    return this.http.get<Message>(`${environment.API_URL}/messages/${id}`);
  }

  public like(id: string){
    return this.http.get(`${environment.API_URL}/messages/${id}/like`);
  }

  public unLike(id: string){
    return this.http.get(`${environment.API_URL}/messages/${id}/unlike`);
  }
}
