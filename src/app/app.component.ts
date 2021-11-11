import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fakeObservable$: Observable<boolean>;

  constructor(private router: Router) {
    this.fakeObservable$ = of(true).pipe(delay(100));
    
    this.router.events.subscribe(e => console.log('AppComponent >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ', e));
  }
}