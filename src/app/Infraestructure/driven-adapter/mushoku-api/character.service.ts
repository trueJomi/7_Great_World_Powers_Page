import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  mushoku_api:String=environment.mushoku_api;
  context:String='/character'

  constructor(private http:HttpClient) {
    
  }
}
