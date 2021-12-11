import { Injectable } from '@angular/core';
import { Etudiant } from './model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8080/etudiants/api';
   
etudiants : Etudiant[]; //un tableau de Etudiant

etudiant : Etudiant;

constructor(private http : HttpClient) {
/*this.etudiants = [

{ idEtudiant : 1, nomEtudiant : "karim", prenomEtudiant :"saadi", dateInscription: new Date("01/14/2011")},
{ idEtudiant : 2, nomEtudiant : "firas", prenomEtudiant :"attia", dateInscription : new Date("12/17/2010")},
{ idEtudiant : 3, nomEtudiant :"nawres", prenomEtudiant : "attia", dateInscription : new Date("02/20/2020")}
];*/
}
listeEtudiant(): Observable<Etudiant[]>{
  return this.http.get<Etudiant[]>(this.apiURL);
  }

ajouterEtudiant( etud: Etudiant):Observable<Etudiant>{
  return this.http.post<Etudiant>(this.apiURL, etud, httpOptions);

}



  supprimerEtudiant(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }


  
    consulterEtudiant(id: number): Observable<Etudiant> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Etudiant>(url);
      }


    trierEtudiants(){
      this.etudiants = this.etudiants.sort((n1,n2) => {
      if (n1.idEtudiant > n2.idEtudiant) {
      return 1;
      }
      if (n1.idEtudiant < n2.idEtudiant) {
      return -1;
      }
      return 0;
      });
      }


 
    
    updateEtudiant(etud :Etudiant) : Observable<Etudiant>
    {
    return this.http.put<Etudiant>(this.apiURL, etud, httpOptions);
    }


}