import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  data="";
  ime = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.data=this.route.snapshot.params.id 
    this.ime = this.route.snapshot.params.name
  }

}
