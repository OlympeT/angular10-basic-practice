import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<User[]>();

  // tslint:disable-next-line:typedef
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  // tslint:disable-next-line:typedef
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
