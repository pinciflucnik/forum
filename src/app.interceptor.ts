import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable } from "rxjs";
import { host } from "./constants/api.constant";

const {apiUrl} = host;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor (private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith("/api")){
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true,
            })
        }
        return next.handle(req) 
    }
}

export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}