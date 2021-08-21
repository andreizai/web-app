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
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // const camelCaseObject = this.remapKeysToCamelCase(event.body);
          // return event.clone({ body: camelCaseObject });
          return event.clone({
            body: this.objectToCamel(event.body),
          });
        }
      })
    );
    
  }

  objectToSnake(data: any): any {
    return snakeKeys(data, {
      recursive: true,
      recursiveInArray: true,
    });
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
