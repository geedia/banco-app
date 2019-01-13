import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Asesor } from './asesor';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  private asesor: Asesor[];
  private urlEndPointAsesor = 'http://10.10.10.200:8080/asesor/';
  private httpHeader = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getAsesores(): Observable<Asesor[]> {
    return this.http.get<Asesor[]>(this.urlEndPointAsesor);
  }

  create(asesor: Asesor): Observable<Asesor> {
    return this.http.post<Asesor>(this.urlEndPointAsesor, asesor, {headers: this.httpHeader});
  }

  getAsesor(id): Observable<Asesor> {
    return this.http.get<Asesor>(this.urlEndPointAsesor + id);
  }

  updateAsesor(asesor: Asesor): Observable<Asesor> {
    return this.http.put<Asesor>(this.urlEndPointAsesor, asesor, {headers: this.httpHeader});
  }

  deleteAsesor(id): Observable<Asesor> {
    return this.http.delete<Asesor>(this.urlEndPointAsesor + id, {headers: this.httpHeader} );
  }

}
