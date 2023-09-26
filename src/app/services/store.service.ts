import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IStore } from '../interfaces/store.interface';
import { environment } from 'src/environments/environment';

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
export class StoreService {
  store_endpoint: string = environment.API_BASE_URL + 'magasins';

  constructor(private client: HttpClient) {}

  getStores(): Observable<IStore[]> {
    return this.client.get<IStore[]>(this.store_endpoint, httpOptions);
  }
}
