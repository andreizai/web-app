import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gist } from '../models/gist';

@Injectable({
  providedIn: 'root'
})
export class GithubGistService {

  constructor(private http: HttpClient) { }

  getUsersGists(username: string): Observable<Gist[]> {
    return this.http.get<any[]>(`https://api.github.com/users/${username}/gists`);
  }

  getFileContentFromRawURL(url: string): Observable<any> {
    const HTTPOptionsForText: Object = {
      responseType: 'text'
    }
    return this.http.get<any>(url, HTTPOptionsForText);
  }

  getGistsForksFromRawURL(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
}
