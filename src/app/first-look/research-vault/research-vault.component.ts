import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-research-vault',
  templateUrl: './research-vault.component.html',
  styleUrls: ['./research-vault.component.scss']
})
export class ResearchVaultComponent implements OnInit {

  username: string = "";
  userauth = false;

  
  constructor(public afAuth: AngularFireAuth) {



   }

  ngOnInit() {

    this.afAuth.authState.subscribe(res => {          // check auth 
      if (res && res.uid) {
        console.log('user is logged in');
        this.userauth = true;
        this.username = res.displayName;

      } else {
        console.log('user not logged in');
        this.userauth = false;
      }
    });

   
  }


}
