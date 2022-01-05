import { Injectable } from '@angular/core';
import { Etudiant } from './model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Classe } from './model/classe.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8090/etudiants/api'
 
   
etudiants : Etudiant[]; //un tableau de Etudiant
 


 
   
constructor(private http : HttpClient,
            private authService: AuthService) {
 

}
listeEtudiant(): Observable<Etudiant[]>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<Etudiant[]>(this.apiURL+"/all",{headers:httpHeaders});
  }

ajouterEtudiant( etud: Etudiant){
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.post<Etudiant>(this.apiURL, Etudiant, {headers:httpHeaders});
}



  supprimerEtudiant(id : number) {
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
    }


  
    consulterEtudiant(id: number): Observable<Etudiant> {
      const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Etudiant>(url,{headers:httpHeaders});
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


 
    
    updateEtudiant(etud :Etudiant) : Observable<Etudiant>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.put<Etudiant>(this.apiURL, etud, {headers:httpHeaders});
    }



    

      listeClasses():Observable<Classe[]>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.get<Classe[]>(`${this.apiURL}/classes`, {headers:httpHeaders});
      }
 
      consulterClasse(id : number) : Observable<Classe>{
        console.log(`${this.apiURL}/types/${id}`);
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.get<Classe>(`${this.apiURL}/classes/${id}`, {headers:httpHeaders});
      }



      ajouterClasse(type : Classe){
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.post<Classe>(`${this.apiURL}/classe`, Classe, {headers:httpHeaders});     
       }

}