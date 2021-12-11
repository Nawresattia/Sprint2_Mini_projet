import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
 
 

 


const routes: Routes = [
  {path: "etudiants", component : EtudiantsComponent},
  {path: "add-etudiant", component : AddEtudiantComponent},
  {path: "updateEtudiant/:id", component: UpdateEtudiantComponent},
  { path: "", redirectTo: "etudiants", pathMatch: "full" }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
