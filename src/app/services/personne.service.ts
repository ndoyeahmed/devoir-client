import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonneModel} from '../models/personne.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  api = 'http://localhost:8080/devoir-1.0-SNAPSHOT/rest/';
  constructor(private http: HttpClient) { }

  add(personne: PersonneModel): Observable<any> {
    return this.http.post(this.api + 'personnes', personne);
  }

  list(): Observable<PersonneModel[]> {
    return this.http.get<PersonneModel[]>(this.api + 'personnes');
  }

  update(personne: PersonneModel, id: number): Observable<any> {
    return this.http.post(this.api + 'personnes/update/' + id, personne);
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.api + 'personnes/delete/' + id, {body: id});
  }
}
