import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICommande } from '../interfaces/commande.interface';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandes_endpoint: string = environment.API_BASE_URL + 'commandes';

  constructor(private client: HttpClient) {}

  getCommandes(): Observable<ICommande[]> {
    return this.client.get<ICommande[]>(this.commandes_endpoint, httpOptions);
  }
}
