import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersdataService {
  pipe(): UsersdataService {
    throw new Error('Method not implemented.');
  }
  constructor(private _HttpClient: HttpClient) {}

  getAllUsers(cuurentIndex: number): Observable<any> {
    return this._HttpClient.get(
      `https://reqres.in/api/users?page=${cuurentIndex} `
    );
  }

  getuser(id: number): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`);
  }
}
