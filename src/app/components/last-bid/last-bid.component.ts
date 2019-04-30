import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../services/product-service/product.service';
@Component({
  selector: 'app-last-bid',
  templateUrl: './last-bid.component.html',
  styleUrls: ['./last-bid.component.css']
})
export class LastBidComponent implements OnInit {

  constructor(private ProductService:ProductService) { }

  @Input() id_product: any;
  lastBid:any;
  ngOnInit() {
    const user={
      id_product:this.id_product,
      id_bidder:localStorage.getItem('user_id')
    }
    this.ProductService.lastBid(user).subscribe(data=>{
      this.lastBid=data;
      console.log(data);
    })
  
    
  }

}
