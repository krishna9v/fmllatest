import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-insider',
  templateUrl: './insider.component.html',
  styleUrls: ['./insider.component.scss']
})
export class InsiderComponent implements OnInit {

  username: string = "";
  userauth = false;
  title:string;
  overview:string;
  id:string;
  link:string;
  data1:string;
  country:string;


  num1 : number; 
  arrayOne(n: number): any[] {
    return Array(n);
  }



  constructor(public afAuth: AngularFireAuth,private httpClient:HttpClient) { }

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

    this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3f0a291b35d827d21951f5dec2a2505c&language=en-US&page=1')
    .subscribe(
      (data:any)=>{
        this.data1 = data;
       //this.link =  "https://image.tmdb.org/t/p/w500";
       //this.data2 = this.link + data.results[3].poster_path;
        this.num1 = data.results.length;
        console.log(this.num1);
      }
    )
    
  }

}


