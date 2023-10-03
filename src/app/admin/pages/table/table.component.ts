
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
  // fornecedores!: any[];
  constructor(
    public router: Router,
    private loginService: LoginService,
    private fornecedorSerivce: FornecedorService
  ) {

    this.fornecedores$ = this.fornecedorSerivce.getFornecedor().pipe(
      tap(() => { console.log("emtroudsfffffffffffffffffffffff") })
    )
  }

  ngOnInit(): void {
    //pq esse da erro?retorna undefined e  o outro usado no projeto da Cathu não
    //falar dos environments que nessa versão saiu, onde eu vejo e fico sabendo das mudanças das versões
    //
    // this.fornecedorSerivce.getFornecedor().subscribe(datas => (this.fornecedores = datas));


    //opcao 2 ok
    // this.fornecedorSerivce.getFornecedor().subscribe(datas => { console.log("cadeeeeeeeeeeee", this.fornecedores = datas) });

    //vou tentar essa
    this.fornecedorSerivce.getFornecedor().subscribe((data) => {
      console.log("detnrooo", data);
    })
  }

  onLogout() {
    this.loginService.removeToken();
    this.router.navigate(["/login/auth"])
  }
}
