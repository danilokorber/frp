import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Message, Thread, MessageText } from '@interfaces/mail';
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

  buildUrl(account: string, subUrl: string): string {
    return environment.api.url + environment.api.mail.url + account + subUrl;
  }

  getUnreadMessagesCount(account: string): Observable<number> {
    let url = this.buildUrl(account, environment.api.mail.unreadMessagesCount);
    return this.http.get<number>(url).pipe(catchError(this.handleError<number>('getUnreadMessagesCount', 0)));
  }

  getThreads(account: string): Observable<Thread[]> {
    let url = this.buildUrl(account, environment.api.mail.threads);
    return this.http.get<any[]>(url).pipe(catchError(this.handleError<any[]>('getThreads', [])));
  }

  getMessagesFromThread(account: string, threadId: string): Observable<Message[]> {
    let url = this.buildUrl(account, environment.api.mail.messagesFromThread) + threadId;
    return this.http.get<any[]>(url).pipe(catchError(this.handleError<any[]>('getMessagesFromThread', [])));
  }

  getMessages(account: string): Observable<any[]> {
    let url = this.buildUrl(account, environment.api.mail.messages);
    return this.http.get<any[]>(url).pipe(catchError(this.handleError<any[]>('getMessages', [])));
  }

  readMessage(account: string, id: string): Observable<any> {
    let url = this.buildUrl(account, environment.api.mail.messages) + '/' + id;
    return this.http.put(url, null).pipe(catchError(this.handleError<any[]>('readMessage', [])));
  }

  deleteMessage(account: string, messageId: string): Observable<any> {
    let url = this.buildUrl(account, environment.api.mail.messages) + '/' + messageId;
    return this.http.delete(url).pipe(catchError(this.handleError<any[]>('deleteMessage', [])));
  }

  organizeByThreads(messages: any[]): any[] {
    let threads: any = {};

    messages.forEach((message) => {
      if (!threads[message.threadId]) {
        threads[message.threadId] = [];
      }
      threads[message.threadId].push(message);
    });
    console.log(threads);
    return threads;
  }
}
