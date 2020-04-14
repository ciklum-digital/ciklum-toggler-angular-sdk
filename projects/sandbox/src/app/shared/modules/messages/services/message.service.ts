import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  public messages$ = new ReplaySubject(1);
  private messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    this.messages$.next(this.messages);
  }

  clear() {
    this.messages = [];
    this.messages$.next(this.messages);
  }
}
