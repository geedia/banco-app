import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Consumo } from './consumo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TarjetaCliente } from '../tarjeta/tarjeta-cliente';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  private tarjeta: TarjetaCliente;
  private consumo: Consumo;

  private urlEndPointTarjeta = 'http://192.168.100.200:8080/tarjeta';
  private urlEndPointConsumo = 'http://192.168.100.200:8080/consumo';

     private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    getTarjeta(id): Observable<TarjetaCliente>  {
      return this.http.get<TarjetaCliente>(this.urlEndPointTarjeta + '/' + id);
    }

    getConsumosCliente(id): Observable<Consumo[]>  {
      console.log('entro ' + id);
      return this.http.get<Consumo[]>(this.urlEndPointConsumo + '/listar/cliente/' + id,  {headers: this.httpHeaders});
    }

    delete(id): Observable<Consumo> {
      return this.http.delete<Consumo>(this.urlEndPointConsumo + '/' + id, {headers: this.httpHeaders} );
    }

    create(consumo: Consumo): Observable<Consumo> {
      return this.http.post<Consumo>(this.urlEndPointConsumo + '/', consumo, {headers: this.httpHeaders});
    }

    getConsumo(id): Observable<Consumo> {
      return this.http.get<Consumo>(this.urlEndPointConsumo + '/' + id);
    }

    updateConsumo(consumo: Consumo): Observable<Consumo> {
      return this.http.put<Consumo>(this.urlEndPointConsumo + '/', consumo, {headers: this.httpHeaders});
    }

  }
