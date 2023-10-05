
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Observable, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  fornecedores$: Observable<any[]>

  constructor(
    public router: Router,
    private loginService: LoginService,
    private fornecedorSerivce: FornecedorService
  ) {


  }

  ngOnInit(): void {
    this.fornecedores$ = this.fornecedorSerivce.getFornecedor()
  }

  onLogout() {
    this.loginService.removeToken();
    this.router.navigate(["/login/auth"])
  }

  onCreateNew() {
    this.router.navigate(["/admin/form"])
  }

  onDelete(id: any) {
    console.log("toc hamadno");
    this.fornecedorSerivce.deleteFornecedor(id)
  }
}
