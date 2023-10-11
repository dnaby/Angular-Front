import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduit } from '../interfaces/produit.interface';

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
export class ProductService {
  produit_endpoint: string = environment.API_BASE_URL + 'produits';

  constructor(private client: HttpClient) {}

  getProducts(): Observable<IProduit[]> {
    return this.client.get<IProduit[]>(this.produit_endpoint, httpOptions);
  }
}
