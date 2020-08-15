import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  secondes: number;
  counterSubscription: Subscription;

  constructor() {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
