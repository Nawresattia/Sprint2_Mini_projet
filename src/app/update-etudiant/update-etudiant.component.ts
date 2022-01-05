import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../model/etudiant.model';
import { Classe } from '../model/classe.model';


@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [
  ]
})
export class UpdateEtudiantComponent implements OnInit {

 

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private etudiantService: EtudiantService)   {}
    classe = new Classe();
    currentEtudiant = new Etudiant();
    etudiants : Etudiant[];
    classes : Classe[];
    updatedClasse = new Classe();


  ngOnInit(): void {
   // this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params.id).
    //subscribe( etud =>{ this.currentEtudiant = etud; } ) ;
this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params.id).subscribe( e => { this.currentEtudiant = e;
      this.classe = this.currentEtudiant.classe;
      console.log("currentEtudiant");
      console.log(this.currentEtudiant); 
      console.log("classe ");
      console.log(this.classe);
    });

    this.etudiantService.listeClasses().subscribe(cls => {
      this.classes = cls;
    });
  }



updateEtudiant() {
  this.updatedClasse = this.classes.find(classe => classe.idClasse == this.classe.idClasse);

  this.currentEtudiant.classe = this.updatedClasse;
  
  this.etudiantService.updateEtudiant(this.currentEtudiant).subscribe(e => {
    this.router.navigate(['etudiants']);
  }, (error) => { 
    alert("Problème lors de la modification !");
    console.log(error);
  });
  
}
  

  }


