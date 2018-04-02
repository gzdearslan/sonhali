import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})

export class ResetpasswordComponent {
  errorMessage: string;

  constructor(private afAuth: AngularFireAuth, private route: Router) {}

  resetpassword(email: string) {
    this.afAuth.auth
        .resetpasswordWithEmail(email)
        .then(result => {
          this.route.navigate(['/signin']);
        })
        .catch(error => {
          this.errorMessage = error.message;
        });
  }

}
