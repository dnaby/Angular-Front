import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMarque } from '../interfaces/marque.interface';

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
export class MarqueService {
  marque_endpoint: string = environment.API_BASE_URL + 'marques';

  constructor(private client: HttpClient) {}

  getMarques(): Observable<IMarque[]> {
    return this.client.get<IMarque[]>(this.marque_endpoint, httpOptions);
  }

  createNewMarque(marque: IMarque): Observable<any> {
    return this.client.post(
        this.marque_endpoint,
        { nom: marque.nom },
        httpOptions 
    );
  }

  deleteMarque(marque: IMarque): Observable<any> {
    return this.client.delete(
      this.marque_endpoint + '/' + marque.id,
      httpOptions
    );
  }

  updateMarque(marque: IMarque): Observable<any> {
    return this.client.put(
      this.marque_endpoint + '/' + marque.id,
      { nom: marque.nom },
      httpOptions
    );
  }

  findMarque(marque: IMarque): Observable<any> {
    return this.client.get(
      `${this.marque_endpoint}/byname/${encodeURIComponent(marque.nom!)}`,
      httpOptions
    );
  }
}
