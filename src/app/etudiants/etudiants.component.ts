import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant }  from '../model/etudiant.model'; 
 


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html'

})
export class EtudiantsComponent implements OnInit {
  
  etudiants : Etudiant[]; 
  constructor(private etudiantService: EtudiantService,
    private router :Router, ){
    //this.etudiants = etudiantService.listeEtudiants();
       
}


supprimerEtudiant(e: Etudiant)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.etudiantService.supprimerEtudiant(e.idEtudiant).subscribe(() => {
console.log("etudiant supprimé");
this.SuprimerEtudiantDuTableau(e);
});


}
SuprimerEtudiantDuTableau(etud : Etudiant) {
  this.etudiants.forEach((cur, index) => {
  if(etud.idEtudiant=== cur.idEtudiant) {
  this.etudiants.splice(index, 1);
  }
  });
}
  ngOnInit(): void {
    this.etudiantService.listeEtudiant().subscribe(etud => {
      console.log(etud);
      this.etudiants = etud;
      });
  }
  

}
