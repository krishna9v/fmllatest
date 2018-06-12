import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {NgForm} from '@angular/forms';
 
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';  //fire store code
import {Observable} from 'rxjs/observable';   // fire store
import 'rxjs/add/operator/map';

interface Note{

  root: string;
  content: string;
  likes: number;
  // id?: string;
  user_name: string;
  movie: string;
}




@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  
  


  username: string;  //emil
  update_bit = true;

  userData_rating: any;
  temp: number=0;
  count: number=0;
  avg: number=0;
  
  del: string;
  
  snapshot: any;
  notecollection: AngularFirestoreCollection<Note>;  // fs
  notes: Observable<Note[]>;
  userauth = false; // fs

// for single doc
  newDoc: AngularFirestoreDocument<Note>;
  notesingle: Observable<Note>;

  //create user
  createUserdoc: AngularFirestoreDocument<Note>;


  userData: string;



  Nusername: string;
  Ncontent: string;
  Nlikes: number;
  path: string;


  constructor(public  afAuth: AngularFireAuth ,private afs: AngularFirestore) { }

  ngOnInit() {


    console.log("hai onInit")
    this.notecollection = this.afs.collection('notes', ref => {
      return ref.orderBy('content')
      // return ref.orderBy('likes','desc')
      // return ref.orderBy('likes','desc').limit(3)
      // return ref.orderBy('likes','desc').orderBy('content')     // console link check
      // return ref.where('likes','<=',50)     // do not use != operator
      // return ref.where('likes','>',10).where('content','==','jaya krishna')


    }); // reference

    this.notes = this.notecollection.valueChanges()    //obsevable of nodes
    this.snapshot = this.notecollection.snapshotChanges()
  
    



// for single

    // this.newDoc = this.afs.doc('notes/'+this.del);
    // this.notesingle = this.newDoc.valueChanges();

    // new user 
    // this.path = "notes"+this.Nusername;
    // this.createUserdoc = this.afs.doc(this.path);



    





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


  singledata(){
    
    this.newDoc = this.afs.doc('notes/'+this.del);
    this.notesingle = this.newDoc.valueChanges();

  }

  updateData() {


    
    this.newDoc.update({content: this.userData})
    this.newDoc.update({likes: this.userData_rating})

    this.update_bit = true ;
    
  }

  newUser(){
    console.log("hi "+ this.Nusername);
    console.log("hai content: "+ this.Ncontent);
    console.log("hai likes "+this.Nlikes);

    this.afs.collection('notes').doc(this.username+ this.Nusername).set({'root':this.username+ this.Nusername,'content': this.Ncontent, 'likes': this.Nlikes, 'user_name':this.username,'movie':this.Nusername });
    // this.afs.collection('notes').add({'content': this.Ncontent, 'likes': this.Nlikes});
    console.log("ok done")
  }

  deleteNote(delDoc,movie_name){
    console.log("doc:"+ delDoc)
    console.log("usename :"+ this.username+movie_name)
    
    if(delDoc ==  this.username+movie_name ){
      console.log("del method: " + delDoc);
      this.afs.doc('notes/'+ delDoc).delete();
    }
    
  }

  findAvg(arg){

     this.count = this.count+1;
  
     this.temp=this.temp + arg;
     
    
     this.avg = this.temp / this.count;

    
  }


  editNote(edit,movie_name){



    if(edit == this.username+movie_name){

    this.update_bit = false;
    this.del = edit;
    this.singledata()
    }
    


  }
  }


 