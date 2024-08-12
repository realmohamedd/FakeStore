import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceStoreService {

  constructor(private ha: http) { }
}