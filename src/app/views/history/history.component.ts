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
    this.getHistory();
  }
  getHistory():void{
    this.UserService.history(this.user).subscribe(data=>{
      this.products=data;
      console.log(this.products);
    })
  }
  
  formatNumber(price: Number): String {
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ".");
  }
}
