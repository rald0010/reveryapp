import {
  Component,
  OnInit,
  ViewChild,
  ViewChildDecorator,
  ViewChildren
} from '@angular/core';
import { UsersComponent } from '../users/users.component'
import { from } from 'rxjs';
import {
  UserService
} from '../../services/user.service';
import {
  User
} from '../../models/User';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import {
  AngularFireDatabase
} from '@angular/fire/database';

import {
  Observable
} from 'rxjs';
import {
  of
} from 'rxjs/observable/of';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  currentClasses: {};
  currentStyles: {};
  loggedIn: boolean;
  showUserForm: boolean = false;

  @ViewChild.bind('userForm') form: any;

  data: any;
  itemValue: '';
  items: Observable < any[] > ;



  constructor(private userService: UserService, public db: AngularFirestore, public database: AngularFireDatabase ) {
    this.getUS().subscribe(data => {
      // this.userService.getUser().subscribe(users => {
      //     // setTimeout(() => {
      //     //   this.users = this.data;
      //     //   this.loaded = true;
      //     // }, 5000);
      //   });
      //console.log(data);
    });

   }

  ngOnInit() {
  }


  getUS(): Observable < User[] > {

    this.db.collection('users').valueChanges().subscribe((data: User[]) => {
      this.users = data;
      this.loaded = true;
      console.log(this.users);
    })
    return of(this.data);

  }


}
