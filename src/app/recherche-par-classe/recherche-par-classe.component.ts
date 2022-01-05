import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Classe } from '../model/classe.model';
 import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-recherche-par-classe',
  templateUrl: './recherche-par-classe.component.html',
  styles: [
  ]
})
export class RechercheParClasseComponent implements OnInit {

  constructor(private etudiantService : EtudiantService) { }

  classes : Classe[];
  etudiants : Etudiant[];
  etudiantsRecherche : Etudiant[];
  idClasse : number;

  ngOnInit(): void {
    this.etudiantService.listeClasses().subscribe( classes =>{
      this.classes = classes;
      console.log(this.classes);
    });

    this.etudiantService.listeEtudiant().subscribe(etudiants => {
      this.etudiants = etudiants;
      this.etudiantsRecherche = etudiants;
      console.log(this.etudiants);
    });
    this.etudiantsRecherche = this.etudiants;
    
  }

  onChange(){
    this.etudiantsRecherche = [];
    this.etudiants.forEach((cur, index) => {
      if(this.idClasse == cur.classe.idClasse){
        console.log("cur = "+cur);
        this.etudiantsRecherche.push(cur);
      } 
    });
  }
}
