import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStock } from '../interfaces/stock.interface';

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
export class StockService {
  stocks_endpoint: string = environment.API_BASE_URL + 'stocks';

  constructor(private client: HttpClient) {}

  getStocks(): Observable<IStock[]> {
    return this.client.get<IStock[]>(this.stocks_endpoint, httpOptions);
  }
}
