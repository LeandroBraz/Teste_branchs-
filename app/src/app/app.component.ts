import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Usuario } from './Usuario';
import { UsuarioService } from './app.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
	usuario: Usuario;
  title = 'MyLead';
  data: any = null;
  data2= {"email": "sydney@fife","password": "pistol"};
  private API_URL = "https://reqres.in/api"

  constructor(private _http: Http) {
    this.getMyBlog();
    this.createAccount(this.data2);
    }
  private getMyBlog() {
      return this._http.get(this.API_URL + '/users?page=2')
                  .map((res: Response) => res.json())
                   .subscribe(data => {
                          this.data = data.data;
                          console.log(this.data);
                  });
    }


  private  createAccount(data2) {
      return new Promise((resolve, reject) => {
        this._http.post('https://reqres.in/api/register', data2)
          .subscribe((result: any) => {
            console.log(result)
            resolve(result.json())
           
          },
          (error) => {
            reject(error.json())
          });
      });
  }

}
