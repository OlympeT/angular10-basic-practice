import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor( private appareilervice: AppareilService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit( form: NgForm ){
    console.log(form.value);
    const name = form.value.name;
    const status = form.value.status;

    this.appareilervice.addAppareil(name, status);
    this.router.navigate(['appareils']);
  }
}
