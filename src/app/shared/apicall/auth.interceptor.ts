import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  baseUrl = 'http://localhost:8080/evote/';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq = req.clone({ url: `${this.baseUrl}${req.url}` });
    if (this.authService.getToken()) {
      apiReq = apiReq.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }
    return next.handle(apiReq);
  }
}
