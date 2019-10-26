import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'admin', component: AdminComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [

    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
