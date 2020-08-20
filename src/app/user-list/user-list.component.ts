import { Component, OnInit } from '@angular/core';
import {User} from '../models/User.model';
import {Subscription} from 'rxjs';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
