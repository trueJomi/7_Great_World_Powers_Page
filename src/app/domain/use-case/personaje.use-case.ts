import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/Personaje.model';
import { PersonajeGateway } from '../models/gateway/personaje.gateway';

@Injectable({
  providedIn: 'root'
})
export class PersonajeUseCase{
  
  constructor(private personajeGateway:PersonajeGateway) { }

  getById(id:Number):Observable<Personaje>{
    return this.personajeGateway.getById(id);
  }

  getAllPersonajes():Observable<Array<Personaje>>{
    return this.personajeGateway.getAll();
  }

}
