import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { camelKeys, snakeKeys } from 'js-convert-case';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseParserService implements HttpInterceptor{

  private apis = ['https://api.github.com'];
 
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    if(!req.url.includes(this.apis[0])) {
      return next.handle(req);
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event.clone({
            body: this.objectToCamel(event.body),
          });
        }
      })
    );
    
  }

  objectToCamel(data: any): any {
    const options = {
      recursive: true,
      recursiveInArray: true
    };

    if (Array.isArray(data)) {
      return data.map(d => camelKeys(d, options));
    }

    return camelKeys(data, options);
  }
}
