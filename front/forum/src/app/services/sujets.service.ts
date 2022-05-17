import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/subject.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SujetsService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get<Subject[]>(`${environment.API_URL}/sujets`);
  }

  public findById(id: string){
    return this.http.get<Subject>(`${environment.API_URL}/sujets/${id}`);
  }

  public like(id: string){
    return this.http.get(`${environment.API_URL}/sujets/${id}/like`);
  }

  public unLike(id: string){
    return this.http.get(`${environment.API_URL}/sujets/${id}/unlike`);
  }

}
