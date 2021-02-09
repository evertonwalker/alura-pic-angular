import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(){
    // Se o token existir vai retornar true, pois vai fazer uma conversão de string pra boolean, caso não vai trazer false.
    return !!this.getToken();
  }

  getToken(){
    return window.localStorage.getItem(KEY );
  }

  setToken(token){
    window.localStorage.setItem(KEY, token);
  }

  removeToken(){
    window.localStorage.removeItem(KEY);
  }



}
