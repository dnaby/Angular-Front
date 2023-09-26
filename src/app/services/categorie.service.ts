import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategorie } from '../interfaces/categorie.interface';

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
export class CategorieService {
  categorie_endpoint: string = environment.API_BASE_URL + 'categories';

  constructor(private client: HttpClient) {}

  getCategories(): Observable<ICategorie[]> {
    return this.client.get<ICategorie[]>(this.categorie_endpoint, httpOptions).pipe(
      tap(response => console.log(response))
    );
  }
}
