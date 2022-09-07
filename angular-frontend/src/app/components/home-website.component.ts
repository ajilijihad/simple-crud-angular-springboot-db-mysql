import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-website.component.html',
  styleUrls: ['./home-website.component.scss']
})
export class HomeWebsiteComponent implements OnInit {
  constructor( ) {} 
  role:string
  ngOnInit() {  
    this.role=localStorage.getItem("role")
  }
  logout(){
    localStorage.clear();
  }
}
