import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ConfigurationService } from '../shared/configuration.service';

@Injectable()
export class ApiService {
  constructor(private http: Http, private config: ConfigurationService ) {
  }

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

  get(path: string): Observable<any> {
    return this.http.get(`${this.config.getConfiguration().api_url}${path}`, {headers: this.setHeaders()})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.config.getConfiguration().api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.config.getConfiguration().api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  // DO NOT IMPLEMENT IT YET
  // delete(path): Observable<any> {
  //   return this.http.delete(
  //     `${environment.api_url}${path}`,
  //     { headers: this.setHeaders() }
  //   )
  //     .catch(this.formatErrors)
  //     .map((res: Response) => res.json());
  // }
}
