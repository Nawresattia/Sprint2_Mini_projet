import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Classe } from '../model/classe.model';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styles: [
  ]
})
export class AddClasseComponent implements OnInit {

  newClasse = new Classe();

  constructor(private etudiantService : EtudiantService,
              private router : Router) { }

  addClasse(){
    this.etudiantService.ajouterClasse(this.newClasse).subscribe(cls => {
      console.log(cls);
    });
    this.router.navigate(['etudiants']);
  }

  ngOnInit(): void {
  }

}
