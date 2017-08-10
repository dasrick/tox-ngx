import {Configuration} from './models/configuration.model';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

const configurationFile = '/config/config.json';

const handleError = function (error): any{
  return Observable.of(false);
};

@Injectable()
export class ConfigurationService {
  private config: Configuration;

  constructor(private http: Http) {
    this.config = environment;
  }

  public load() {
    return new Promise((resolve) => {
      this.http.get(configurationFile)
        .map(res => res.json())
        .catch(handleError)
        .subscribe(config => {
          this.mergeConfig(config);
          resolve();
        })
      ;
    });
  }

  private mergeConfig(config: Configuration): Configuration {
    const keys = Object.keys(config);

    for (let i = 0; i < keys.length; i++) {
      const index = keys[i];
      this.config[index] = config[index];
    }

    return;
  }

  public getConfiguration(): Configuration {
    return this.config;
  }
}
