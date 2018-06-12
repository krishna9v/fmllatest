import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';  //fire store code
import {Observable} from 'rxjs/observable';   // fire store
import 'rxjs/add/operator/map';



interface UserMovies{

  username: string;
  movies_list:string[];
  week: string;
  lastupdated: string;
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  save_status= false;


  
   saving = false;
  // time_date_now: string = "First Update";

  local_date = new Date();
  date5 = this.local_date.toString();
  // time_date_now = this.date5.substr(4,12);
  time_date_now = this.date5;

        snapshot: any;
        overload = false;   // 8 limit for grid
        usermail: string;  // default mail  username 
        
        username: string;
        userauth =false;        // user authentication status


        
        id : number;  // id for grid clicked
        count: number= 0;  // count of no of movies selected
        data1:string;

        

        grid_collection: AngularFirestoreCollection<UserMovies>;  // fs
        Movies_list_from_database : Observable<UserMovies[]>;
        
        // varibles for movie list 
        movies = [];
        num1 : number; 
        arrayOne(n: number): any[] {
          return Array(n);
        }

      

        


        
        constructor(public afAuth: AngularFireAuth, private httpClient:HttpClient, private afs: AngularFirestore,private modalService: NgbModal) {  


                    console.log("hay constructor method  ")
                    this.afAuth.authState.subscribe(res => {          // check auth 
                      if (res && res.uid) {
                        console.log('user is logged in');
                        this.userauth = true;
                        
                        this.username =res.displayName;
                        this.usermail = res.email;
                        console.log( "authed " + res.email);


                      } else {
                        console.log('user not logged in');
                        this.userauth =false;
                        
                      }
                      this.Update_page();
                    });
          
                   

        }
        
       
        
        
        ngOnInit() {

        
                  this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3f0a291b35d827d21951f5dec2a2505c&language=en-US&page=1')
                  .subscribe(
                    (data:any)=>{
                      this.data1 = data;
                    //this.link =  "https://image.tmdb.org/t/p/w500";
                    //this.data2 = this.link + data.results[3].poster_path;
                      this.num1 = data.results.length;
                      console.log("movies list count"+ this.num1);
                    
                    }
                  )
                  
        
        }

        Update_page(){
            console.log("hay after content init method")
            if( this.userauth == true )
            {
                    console.log("query to db for array "+ this.usermail)
                    this.grid_collection = this.afs.collection('gridData', ref => {
                    
                      return ref.where('username','==', this.usermail )
                  
                    }); // reference
                    
                    this.Movies_list_from_database = this.grid_collection.valueChanges()    //obsevable of nodes
                    this.snapshot = this.grid_collection.snapshotChanges()
                  }
          }
       
        onclick(event) {  // add movie id to array

          this.save_status = false;
                if(this.count <= 7 ){
                    console.log(event.target.id);

                    this.id = event.target.id;
                    
                    this.movies.push(this.id);
                    
                    console.log(this.movies);

                    this.count= this.movies.length;

                    
                    
                    if(this.count == 8){

                      this.overload = true ;

                    }
                    else
                    {
                      this.overload = false;
                    }
                  }

        }

        removeItem(event) {    // remove movie from array

          this.save_status = false;
                console.log(event.target.id);

                this.movies.splice(event.target.id, 1);

                this.count= this.movies.length;


                
                if(this.count == 8){

                  this.overload = true ;

                }
                else
                {
                  this.overload = false;
                }


      }

      sendData(){   //send data to database as doc
          console.log("at insert method")
          this.save_status = true;
            // time_date_now = this.date5.substr(4,12);
            this.time_date_now = this.date5;
            this.afs.collection('gridData').doc(this.usermail).set({'username':this.usermail,'movies_list': this.movies, 'week': "this week", 'lastupdated': this.time_date_now });
            // this.afs.collection('notes').add({'content': this.Ncontent, 'likes': this.Nlikes});
            console.log("ok done")
      }
      assign(newData,time){

        this.movies = newData ;
 console.log( "time :" + time)

        if(time == null )
        {
          this.time_date_now =  "First time";
        }
        else{
          // time_date_now = this.date5.substr(4,12);
            this.time_date_now = time;
        }
        



      }


      // date1= this.today.toString;
      // date2 = this.data1.substr(4,12);


}
