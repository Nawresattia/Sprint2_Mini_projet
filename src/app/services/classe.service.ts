import { Injectable } from '@angular/core';
import { Classe } from '../model/classe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
headers: new HttpHeaders( {'Content-Classe': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  apiURL: string = 'http://localhost:8090/etudiants/api/classes';

  classes : Classe[];

  constructor(private http : HttpClient) { }

  listeClasses():Observable<Classe[]>{
    return this.http.get<Classe[]>(this.apiURL);
  }

  ajouterClasse(classe : Classe){
    return this.http.post<Classe>(this.apiURL, classe, httpOptions);
  }

}
