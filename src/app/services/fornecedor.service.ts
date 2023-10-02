import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class FornecedorService {

    private encodedToken: string | null = null;
    private readonly tokenKey = 'authToken';


    constructor(
        public http: HttpClient,
    ) {

    }



    public createFornecedor({ email, senha }: any) {
        const url = 'http://localhost:4000/fornecedor/create';
        return this.http.post<any>(url, {
            email: email,
            senha: senha
        })
    }

    public getFornecedor(): Observable<any[]> {
        // OPCAO 1
        // const url = 'http://localhost:4000/fornecedor/list';
        // const cont = this.http.get<any>(url)
        // console.log("teste", cont);
        // return cont

        //OPCAO 2

        return this.http.get<any[]>('http://localhost:4000/fornecedor/list');




    }






}