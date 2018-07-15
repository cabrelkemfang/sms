import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, ResponseContentType, Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  token = localStorage.getItem('token');

  constructor(private _http: Http) { }

  signup(student) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8087/student', JSON.stringify(student), options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }
  login(matricule, password) {
    let token = btoa(matricule + ":" + password) 
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/login', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }


  result() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/result', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  registerStudent() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/activated/student', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  sensResult(result) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:8087/secure/send/result', JSON.stringify(result), options)
      .pipe(map(res => res.json())
      );
  }

  sendAnnonce(message,title) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:8087/secure/send/annonce/'+message+'/'+title, options)
      .pipe(map(res => res.json())
      );
  }

  desactive(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/desactivate/'+matricule, options)
      .pipe(map(res => res.json())
      );
  }

  code(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/verification/'+matricule, options)
      .pipe(map(res => res.text())
      );
  }

  activate(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/activate/'+matricule, options)
      .pipe(map(res => res.text())
      );
  }


  status(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/status/'+matricule, options)
      .pipe(map(res => res.json())
      );
  }


}
