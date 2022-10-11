import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  apiURL: string = environment.apiURL;

  private _menu = new Subject<boolean>();
  menu$ = this._menu.asObservable();

  constructor(private _http: HttpClient) { }

  wsGeneral(ws: string, param: any): Observable<any> {
    let headers = new HttpHeaders();

    headers=headers.append('content-type','application/json')
    headers=headers.append('Access-Control-Allow-Origin', '*')
    return this._http.post(this.apiURL + "/" + ws, param, { 'headers': headers });
  }

  wsGeneralFormData(ws: string, param: any): Observable<any> {
    let headers = new HttpHeaders();
 
    headers=headers.append('content-type','application/json')
    headers=headers.append('Access-Control-Allow-Origin', '*')
    


    return this._http.post(this.apiURL + "/" + ws, param, { 'headers': headers });
  }
  
  menuAccion(accion: boolean) {
    this._menu.next(accion);
  }

  public downloadFile(ws: string, param: any): Observable < Blob > {  
        return this._http.get(this.apiURL + "/" + ws , {  
            responseType: 'blob'  
        });  
  }  
}
