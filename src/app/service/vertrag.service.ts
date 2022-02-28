import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Kunde} from "../model/kunde";
import {Anschrift} from "../model/anschrift";
import {Bankverbindung} from "../model/bankverbindung";

@Injectable({
  providedIn: 'root'
})
export class VertragService {

  constructor(private httpClient: HttpClient) {
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getAllKunde(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/kunden')
  }

  getKundeById(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/kunden/' + id)
  }

  getAnschriftById(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/anschrift/' + id)
  }

  getBankVerbById(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/bankverbindung/' + id)
  }

  updateKunde(id: number, kunde: {anschrift: Anschrift, bankverbindung: Bankverbindung}): Observable<any> {
    return this.httpClient.put('http://localhost:8080/api/kunden/' + id, kunde);
  }

  deleteKunde(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/api/kunden/' + id);
  }

  addKunde(kunde: {anschrift: Anschrift, bankverbindung: Bankverbindung}): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/addKunde', kunde);
  }
}
