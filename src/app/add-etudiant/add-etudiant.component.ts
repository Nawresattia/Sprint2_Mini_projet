import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant }  from '../model/etudiant.model';
 

 
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styles:[]
})
export class AddEtudiantComponent implements OnInit {


  newEtudiant = new Etudiant();
  message:string;
  constructor(private etudiantService: EtudiantService,
    private router :Router,) { }
  ngOnInit(): void { 
  }


  addEtudiant(){
this.etudiantService.ajouterEtudiant(this.newEtudiant).subscribe(prod => {
console.log(prod);
});

this.router.navigate(['etudiants']).then(() => {
  window.location.reload();
  });

}}
  


   


 