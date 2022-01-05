import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Classe } from '../model/classe.model';
import { Etudiant }  from '../model/etudiant.model';
 

 
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.Component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  newIdClasse : number;
  newClasse = new Classe();
  newEtudiant = new Etudiant();
  classes : Classe[];

  message:string;
  constructor(private etudiantService: EtudiantService,
    private router :Router,) { }

  


  addEtudiant(){

    this.newClasse = this.classes.find( classe => classe.idClasse == this.newIdClasse);

    this.newEtudiant.classe = this.newClasse;  
    if(this.newEtudiant.classe != undefined){
      this.etudiantService.ajouterEtudiant(this.newEtudiant).subscribe(etud => {
        console.log(etud);
      });
      this.router.navigate(['etudiant']);
    }
      else
        console.log("insertion problem");
  }



  ngOnInit(): void { 
    this.etudiantService.listeClasses().subscribe(cls => {
      console.log(cls);
      this.classes = cls;
    });
  }

}
  


   


 