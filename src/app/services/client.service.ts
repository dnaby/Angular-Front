import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClient } from '../interfaces/client.interface';

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
export class ClientService {
  client_endpoint: string = environment.API_BASE_URL + 'clients';

  constructor(private client: HttpClient) {}

  getClients(): Observable<IClient[]> {
    return this.client.get<IClient[]>(this.client_endpoint, httpOptions);
  }
}
