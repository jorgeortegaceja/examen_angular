import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

export interface PeriodicElement {
  created_at: string;
  edad: number;
  email: string;
  id: number;
  name: string;
  user_address: [];
}



@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  users = {};
  protected url = ' http://127.0.0.1:8000';

  constructor(
    private apiSevice: ApiService
  ) { }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'user_address'];
  dataSource = [];


  ngOnInit(): any {
    this.apiSevice.getRecords().then((res) => {
      this.dataSource = res;
      console.log(res);
    });
  }

}
