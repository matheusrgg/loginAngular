import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class FornecedorService {



    constructor(
        public http: HttpClient,
    ) {

    }




    public createFornecedor(email, nome, cnpj, descricao): Observable<any[]> {
        console.log("cheameiiii");
        const url = 'http://localhost:4000/fornecedor/create';
        return this.http.post<any>(url, {
            email: email,
            nome: nome,
            cnpj: cnpj,
            descricao: descricao
        })

    }

    public getFornecedor(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:4000/fornecedor/list');

    }

    public deleteFornecedor(id: any): Observable<any[]> {
        console.log("to entrando", id);
        return this.http.delete<any[]>(`http://localhost:4000/fornecedor/delete/${id}`);

    }








}