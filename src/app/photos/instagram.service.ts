import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramService {

  constructor (private jsonp: Jsonp) {}

  getMedia(): Observable<Object> {
    return this.jsonp.request('https://www.instagram.com/tlmader/media?prefix=JSONP_CALLBACK')
      .map(res => res.json().results.map(item => {
        return {};
      }))
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
