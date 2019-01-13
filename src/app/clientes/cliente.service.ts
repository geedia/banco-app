import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
     cliente: Cliente;
     private urlEndPoint = 'http://192.168.100.200:8080/cliente/';

     private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
    getClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.urlEndPoint + 'listar');
    }

    getCliente(id): Observable<Cliente>  {
      return this.http.get<Cliente>(this.urlEndPoint + id);
    }

    create(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
    }

    updateCliente(cliente: Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
    }

    deleteCliente(id): Observable<Cliente> {
      return this.http.delete<Cliente>(this.urlEndPoint + id, {headers: this.httpHeaders} );
    }
}
