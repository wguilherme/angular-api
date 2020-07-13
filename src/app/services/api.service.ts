import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ApiService {
  constructor(public http: HttpClient) { }

  list() {
    return this.http.get('http://localhost:3010/vendor')
      .pipe(
        // delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get(`http://localhost:3010/vendor/${id}`).pipe(take(1));
  }

}
