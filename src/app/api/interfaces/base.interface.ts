import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  observe?: 'body',
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean,
  responseType?: 'json',
  withCredentials?: boolean,
}


export interface BaseInterface {
  get<T>(endPoint: string, options?: RequestOptions): Observable<T>;

  post<T>(endPoint: string, options?: RequestOptions): Observable<T>;

  put<T>(endPoint: string, options?: RequestOptions): Observable<T>;

  delete<T>(endPoint: string, options?: RequestOptions): Observable<T>;
}