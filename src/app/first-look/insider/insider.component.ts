import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  count:number=0;
  movies:number = Array[10];
  some:any;
  closeResult: string;
  
  num1 : number; 
  arrayOne(n: number): any[] {
    return Array(n);
  }



  constructor(public afAuth: AngularFireAuth,private httpClient:HttpClient,private modalService: NgbModal) { }

  ngOnInit() {

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



  // onClick1(event){
  //  this.some = event.target.id;
  //  this.icon0=this.movies[this.count+this.some];

  // }


  open(content) {
    this.modalService.open(content).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }


}
