import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SarrsService {
  private readonly http = inject(HttpClient);
  
  constructor() { }

  getListing() {
    return this.http.get('./assets/mock/stg_archive.json').pipe(
      map( (resp:any) => resp['stg_archive'] )
    );
  }
}
