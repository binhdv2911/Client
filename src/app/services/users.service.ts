import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import jwt from 'jwt-decode';
import { ProfileResponse } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  Base_URL = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) {}

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.Base_URL + '/user');
  }

  register(userData: Users): Observable<Users[]> {
    return this.http.post<Users[]>(this.Base_URL + '/user/register', userData);
  }
  login(userData: any): Observable<any> {
    return this.http.post<any>(this.Base_URL + '/user/login', userData);
  }
  logOut() {
    localStorage.removeItem('_sa');
    this.router.navigate(['/home-page']);
  }
  getToken() {
    return localStorage.getItem('_sa');
  }
  getProfile(username: any): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(
      this.Base_URL + `/user/profile/${username}`
    );
  }
}
