import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticleCommande } from '../interfaces/article_commande.interface';

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
export class ArticleCommandeService {
  article_commande_endpoint: string = environment.API_BASE_URL + 'article_commandes';

  constructor(private client: HttpClient) {}

  getArticleCommandes(): Observable<IArticleCommande[]> {
    return this.client.get<IArticleCommande[]>(this.article_commande_endpoint, httpOptions);
  }
}
