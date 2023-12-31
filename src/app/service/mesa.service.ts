import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MesaService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  getMesas(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/listMesa`);
  }
}
