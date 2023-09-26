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
    return this.client.get<ICategorie[]>(this.categorie_endpoint, httpOptions);
  }

  createNewCategorie(categorie: ICategorie): Observable<any> {
    return this.client.post(
        this.categorie_endpoint,
        { nom: categorie.nom },
        httpOptions 
    );
  }

  deleteCategorie(categorie: ICategorie): Observable<any> {
    return this.client.delete(
      this.categorie_endpoint + '/' + categorie.id,
      httpOptions
    );
  }

  updateCategorie(categorie: ICategorie): Observable<any> {
    return this.client.put(
      this.categorie_endpoint + '/' + categorie.id,
      { nom: categorie.nom },
      httpOptions
    );
  }
}
