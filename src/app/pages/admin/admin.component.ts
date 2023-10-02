import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/service/login.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

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
    this.router.navigate(["/login"])
  }
}
