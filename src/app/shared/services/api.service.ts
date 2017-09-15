import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  config;

  constructor(private http: Http) {
    this.config = environment;
  }

  // provided basic methods
  get (path: string): Observable<any> {
    return this.http.get(
      this.getApiUrl() + path,
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      this.getApiUrl() + path,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.getApiUrl() + path,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => {
        return res.headers.get('Location');
      })
      ;
  }

  delete(path): Observable<any> {
    return this.http.delete(
      this.getApiUrl() + path,
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  // private helper
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  private getApiUrl() {
    return this.config.api_url;
  }
}
