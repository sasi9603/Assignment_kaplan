import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InstanceService {
  apiURL: any = environment.url;

  constructor(public http: HttpClient) {}

  public getBooksDetails(): any {
    return this.http.get(this.apiURL);
  }
}
