import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  userauth = false;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.afAuth.authState.subscribe(res => {          // check auth 
      if (res && res.uid) {
        console.log('user is logged in');
        this.userauth = true;

      } else {
        console.log('user not logged in');
        this.userauth = false;
      }
    });
  }

}
