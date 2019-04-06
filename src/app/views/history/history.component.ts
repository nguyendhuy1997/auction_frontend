import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import Products from '../../models/product';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private UserService:UserService) { }
  user = {
    id_bidder:localStorage.getItem('user_id')
  };
  products: Products[];
  ngOnInit() {
    console.log(this.user);
    this.getHistory();
  }
  getHistory():void{
    this.UserService.history(this.user).subscribe(data=>{
      this.products=data;
    })
   
  }
}
