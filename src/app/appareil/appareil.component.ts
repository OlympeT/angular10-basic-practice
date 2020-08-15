import { Component, Input, OnInit } from '@angular/core';

import { AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string ;
  @Input() appareilStatus: string ;
  @Input() appareilDate: string ;
  @Input() indexOfAppareil: number ;
  @Input() id: number ;


  constructor( private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getStatus() {
    return this.appareilStatus;
  }

  // tslint:disable-next-line:typedef
  getColor(){
    if (this.appareilStatus === 'éteint'){
      return 'red';
    }else if (this.appareilStatus === 'allumé'){
      return 'green';
    }
  }

  // tslint:disable-next-line:typedef
  onAllume(){
    this.appareilStatus = 'allumé';
  }

  // tslint:disable-next-line:typedef
  onEteint(){
    this.appareilStatus = 'éteint';
  }

  // tslint:disable-next-line:typedef
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  // tslint:disable-next-line:typedef
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
