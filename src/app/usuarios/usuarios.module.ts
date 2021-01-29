import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TableUsersComponent } from './table-users/table-users.component';
import { DataUsersComponent } from './data-users/data-users.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableUsersComponent, DataUsersComponent],
  imports: [
    MatTableModule,
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
  ]
})
export class UsuariosModule { }
