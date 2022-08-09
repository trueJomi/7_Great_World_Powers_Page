import { Observable } from "rxjs";
import { Personaje } from "../Personaje.model";

export abstract class PersonajeGateway {

    abstract getById(id:Number): Observable<Personaje>;
    
    abstract getAll():Observable<Array<Personaje>>;

    abstract getByName(name:String): Observable<Personaje>;

}