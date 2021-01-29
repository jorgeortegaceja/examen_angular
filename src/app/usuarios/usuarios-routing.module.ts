import { DataUsersComponent } from './data-users/data-users.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    component: TableUsersComponent
  },
  {
    path: 'usuario/:id',
    component: DataUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
