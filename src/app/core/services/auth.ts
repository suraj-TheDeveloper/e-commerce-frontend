import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, data)
      .pipe(tap((res: any) => {
        localStorage.setItem('token', res.token);
      }));
  }

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/register`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

}
