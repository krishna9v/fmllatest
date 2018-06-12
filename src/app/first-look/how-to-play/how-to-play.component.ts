import { Component, OnInit } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent implements OnInit {

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
