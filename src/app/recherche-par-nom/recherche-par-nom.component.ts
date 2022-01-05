import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { Classe } from '../model/classe.model';
import { Etudiant } from '../model/etudiant.model';
 

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  constructor(private etudiantService : EtudiantService) { }

  classes : Classe[];
  etudiant : Etudiant[];
  etudiantsRecherche : Etudiant[];
  nomEtudiant : string;

  ngOnInit(): void {
    this.etudiantService.listeClasses().subscribe( classes =>{
      this.classes = classes;
      console.log(this.classes);
    });

    this.etudiantService.listeEtudiant().subscribe(etudiants => {
      this.etudiant= etudiants;
      this.etudiantsRecherche = etudiants;
      console.log(this.etudiant);
    });
    this.etudiantsRecherche = this.etudiant;
  }

  onChange(){
    this.etudiantsRecherche = [];
    this.etudiant.forEach((cur, index) => {
      if(cur.nomEtudiant.indexOf(this.nomEtudiant) >= 0){
        console.log("cur = "+cur);
        this.etudiantsRecherche.push(cur);
      }
    });
  }

}
