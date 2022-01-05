import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EtudiantGuard } from './etudiant.guard';
 
 

 


const routes: Routes = [
  {path: "etudiants", component : EtudiantsComponent},
  {path: "add-etudiant", component : AddEtudiantComponent, canActivate:[EtudiantGuard]},
  {path: "updateEtudiant/:id", component: UpdateEtudiantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
 

  { path: "", redirectTo: "etudiants", pathMatch: "full" }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
