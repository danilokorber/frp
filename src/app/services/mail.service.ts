import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of, interval } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUnreadMessagesCount(account: string): Observable<number> {
    let url = environment.api.url + environment.api.mail.url + account + environment.api.mail.unreadMessagesCount;
    return this.http.get<number>(url).pipe(catchError(this.handleError<number>('getUnreadMessagesCount', 0)));
  }
}
