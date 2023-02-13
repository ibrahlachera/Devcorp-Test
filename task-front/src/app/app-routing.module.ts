import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './Components/list-projects/list-projects.component';
import { ListTasksProjectComponent } from './Components/list-tasks-project/list-tasks-project.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { LoginGuard } from './Guards/login.guard';
import { UserGuard } from './Guards/user.guard';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginPageComponent,canActivate: [LoginGuard]},
  {path:"list-project",component:ListProjectsComponent,canActivate:[UserGuard]},
  {path:"projects/show/:id",component:ListTasksProjectComponent,canActivate:[UserGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
