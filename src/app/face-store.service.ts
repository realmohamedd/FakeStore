import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceStoreService {

  constructor(private _HttpClient: HttpClient) { }

  getMovies():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
}
