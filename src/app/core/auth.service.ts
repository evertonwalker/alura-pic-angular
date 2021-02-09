import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(formLogin: { userName, password }): Observable<any> {


    return this.http.post(`${this.API_URL}/user/login`, formLogin, { observe: 'response' } )
    .pipe(
      tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
      })
    )
    ;
  }

}
