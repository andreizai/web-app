import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { camelKeys } from 'js-convert-case';
import { Observable, of } from 'rxjs';
import { Gist } from '../models/gist';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubGistService {

  constructor(private http: HttpClient) { }

  getUsersGists(username: string): Observable<Gist[]> {
    return this.http.get<any[]>(`https://api.github.com/users/${username}/gists`)
    // .pipe(
    //   map(response => {
    //     debugger;
    //     var plm = this.objectToCamel(response);
    //     var plm2 = this.objectToCamel(response[0]);
    //     return [];
    //   })
    // );
  }

  private objectToCamel(data: any): any {
    return camelKeys(data, {
      recursive: true,
      recursiveInArray: true,
    });
  }

  getFromRawURL(url: string): Observable<any> {
    const HTTPOptionsForText: Object = {
      responseType: 'text'
    }
    return this.http.get<any>(url, HTTPOptionsForText);
  }
}
