import { Component, OnInit } from '@angular/core';
import Products from '../../models/product';
import {ProductService} from '../../services/product-service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private ProductService:ProductService,private router: Router) { }
  products: Products[];
  ngOnInit() {
    if(localStorage.getItem('user_id')!=null){
      const user={
        id_user:localStorage.getItem('user_id')
      }
      this.ProductService.getWishlist(user).subscribe(data=>{
        this.products=data;
      })  
    }
    else this.router.navigate(['']);
  }

}
