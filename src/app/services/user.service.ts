import {
  UsersComponent
} from '../components/users/users.component';
import {
  Injectable
} from '@angular/core';
import {
  User
} from '../models/User';
import {
  Observable
} from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable < any > ;


  constructor() {
    this.users = [{
        firstName: 'Christian Gerald',
        lastName: 'Delfino',
        age: 21,
        address: {
          street: 'Tambuco St',
          city: 'Goa',
          province: 'Camarines Sur'
        },
        image: 'http://lorempixel.com/100/100/cats/3',
        isActive: true,
        balance: 200,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true,
        email: 'dfg@gmail.com'
      },
      {
        firstName: 'Arthur',
        lastName: 'Delfino',
        age: 21,
        address: {
          street: 'Tambuco St',
          city: 'Goa',
          province: 'Camarines Sur'
        },
        image: 'http://lorempixel.com/100/100/cats/1',
        isActive: false,
        balance: 200,
        registered: new Date('03/03/2019 08:30:00'),
        hide: true,
        email: 'dfg@gmail.com'
      },
      {
        firstName: 'Mathew',
        lastName: 'Delfino',
        age: 21,
        address: {
          street: 'Tambuco St',
          city: 'Goa',
          province: 'Camarines Sur'
        },
        image: 'http://lorempixel.com/100/100/cats/2',
        isActive: true,
        balance: 200,
        registered: new Date('04/02/2019 08:30:00'),
        hide: true,
        email: 'dfg@gmail.com'
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);


    });

    return this.data;
  }







  getUser(): Observable<User[]> {

    console.log('Fetching users from service..')
    return of(this.users);

  }

  addUser(user: User) {
    this.users.unshift(user)
  }





}
