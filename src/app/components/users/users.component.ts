import {
  UserService
} from '../../services/user.service';
import {
  User
} from '../../models/User';
import {
  Component,
  OnInit,
  ViewChild,
  ViewChildDecorator,
  ViewChildren
} from '@angular/core';
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
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import {
  AngularFireStorage
} from 'angularfire2/storage';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;


  modalOptions: NgbModalOptions;

  closeResult: string;
  newuser: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      province: ''
    },
    email: '',
    lodge: '',
    position: '',
    voter: false,

  };

  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  currentClasses: {};
  currentStyles: {};
  loggedIn: boolean;
  showUserForm: boolean = true;


  @ViewChild.bind('userForm') form: any;

  data: any;
  itemValue: '';
  items: Observable < any[] > ;

  constructor(private afStorage: AngularFireStorage, private userService: UserService, public db: AngularFirestore, public database: AngularFireDatabase, private modalService: NgbModal) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }






    setTimeout(() => {
      this.users = this.data;
      this.loaded = true;
    }, 5000);
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


  upload(event) {
    this.afStorage.upload('/upload/to/this-path', event.target.files[0]);
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(randomId);
    const task = ref.put(event.target.files[0]);

  }


  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }








  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }






  ngOnInit() {
    this.userService.getData().subscribe((data: User[]) => {
      console.log(data);
    })
    this.setCurrentClasses();
    this.setCurrentStyles();
  }


  getUS(): Observable < User[] > {

    this.db.collection('users').valueChanges().subscribe((data: User[]) => {
      this.users = data;
      this.loaded = true;
      console.log(this.users);
    })
    return of(this.data);

  }

  addUser = () => {
    this.newuser.isActive = true;
    this.newuser.registered = new Date();
    this.users.unshift(this.newuser);
    this.newuser = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        province: ''
      },
      email: '',
      lodge: '',
      position: '',
      voter: false


    }

  }

  setCurrentClasses = () => {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }


  setCurrentStyles = () => {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '170px',
      'font-size': this.showExtended ? '' : '40px',
    };

  }

  onSubmit({
    value,
    valid
  }: {
    value: User,
    valid: boolean
  }) {

    if (!valid) {
      console.log('Form is not valid!')

    } else {

      this.db.collection('users').add({
        firstName: value.firstName,
        lastName: value.lastName,
        image: '',
        isActive: true,
        registered: new Date(),
        hide: true,
        email: value.email,
        lodge: value.lodge,
        position: value.position,
        voter: value.voter,
        address: {
          street: '',
          city: '',
          province: ''
        },
      });




      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      console.log(value);



      this.form.reset();

    }
  }





}
