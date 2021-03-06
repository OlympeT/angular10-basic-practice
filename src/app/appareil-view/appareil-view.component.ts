import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils: any [];
  appareilSubscription: Subscription;

  constructor( private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[] ) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppreilSubject();
  }

  // tslint:disable-next-line:typedef
  onAllumer(){
    this.appareilService.switchOnAll();
  }

  // tslint:disable-next-line:typedef
  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
