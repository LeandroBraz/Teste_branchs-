import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UsuarioService {
    private _Url = 'https://reqres.in/';
    data: any = null;
    usuario: Usuario;

    constructor(private _http: Http) {
        this.getUsuario();
    }
    
    getUsuario(): Observable<Usuario> {
        return this._http.get(this._Url + 'api/users/2')
            .map((response: Response) => <Usuario>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

        
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}