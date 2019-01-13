import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TarjetaCliente } from './tarjeta-cliente';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private tarjeta: TarjetaCliente;
  private urlEndPoint = 'http://10.10.10.200:8080/tarjeta/';
  private httpHeader = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  create(tarjeta: TarjetaCliente): Observable<TarjetaCliente> {
    return this.http.post<TarjetaCliente>(this.urlEndPoint, tarjeta, {headers: this.httpHeader});
  }

  getTarjeta(id): Observable<TarjetaCliente> {
    return this.http.get<TarjetaCliente>(this.urlEndPoint + id);
  }

  getTarjetasCliente(id): Observable<TarjetaCliente[]> {
    return this.http.get<TarjetaCliente[]>(this.urlEndPoint + '/cliente/' + id);
  }

  updateTarjeta(tarjeta: TarjetaCliente): Observable<TarjetaCliente> {
    return this.http.put<TarjetaCliente>(this.urlEndPoint, tarjeta, {headers: this.httpHeader});
  }

  deleteTarjeta(id): Observable<TarjetaCliente> {
    return this.http.delete<TarjetaCliente>(this.urlEndPoint + id, {headers: this.httpHeader} );
  }
}
