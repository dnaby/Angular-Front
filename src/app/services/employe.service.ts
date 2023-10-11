import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmploye } from '../interfaces/employe.interface';

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
export class EmployeService {
  employe_endpoint: string = environment.API_BASE_URL + 'employes';

  constructor(private client: HttpClient) {}

  getEmployes(): Observable<IEmploye[]> {
    return this.client.get<IEmploye[]>(this.employe_endpoint, httpOptions);
  }
}
