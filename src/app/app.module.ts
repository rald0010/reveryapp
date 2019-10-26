import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { PreregistrationComponent } from './components/preregistration/preregistration.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminComponent } from './components/admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ93qaJUFKizzy-hBobDr4lDfWJ81tEdQ',
  authDomain: 'reveryencomapp.firebaseapp.com',
  databaseURL: 'https://reveryencomapp.firebaseio.com',
  projectId: 'reveryencomapp',
  storageBucket: 'reveryencomapp.appspot.com',
  messagingSenderId: '819478662646',
  appId: '1:819478662646:web:be8d21bcdbe9f1937c4bd7',
  measurementId: 'G-915YWSKRKC'
};


@NgModule({
  declarations: [
    AppComponent,
    PreregistrationComponent,
    UsersComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,
    AppRoutingModule


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})



export class AppModule { }
