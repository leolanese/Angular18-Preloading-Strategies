import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagPreloadingStrategyService extends PreloadingStrategy {

   preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
      return route.data?.["preload"] === true ? load() : of(null);
   }

}
