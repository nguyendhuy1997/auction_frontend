import { Component, OnInit, Testability } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service/product.service';
import { UserService } from '../../services/user-service/user.service';
import Products from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TouchSequence, Alert } from 'selenium-webdriver';
import { BidService } from '../../services/bid-service/bid.service';
import { DomSanitizer } from '@angular/platform-browser';
import Pusher from 'pusher-js';
declare global {
  interface Window { Echo: any; }
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private UserService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private BidService: BidService,
    private _DomSanitizationService: DomSanitizer) { }
  buy: boolean = false;
  check: boolean = false;
  formData: FormGroup;
  product: Products;
  msg: string;
  msgBuy: string;
  bidder: string;
  seller: string;
  id_bidder: any = localStorage.getItem('user_id');
  checklist: number;
  currentPrice: any;
  relativeProduct: Products;


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.getDetail(id);
    this.statusWishlist();

    var pusher = new Pusher('eeb0818f31b45a74e6ae', {
      cluster: 'ap1',
      encrypted: true
    });
    var channel = pusher.subscribe('channel-bid-' + id, function (data) {
      channel.members.each(function (member) {
        console.log(member);
      });
    });
    channel.bind('App\\Events\\BidEvent', (data) => {
      console.log(data);
      this.product.current_price = data.priceBid;
      this.UserService.getEmail(data.id_bidder).subscribe(data => {
        this.bidder = data[0].email;
      })
    });

    var channel1 = pusher.subscribe('channel-buynow-' + id);
    channel1.bind('App\\Events\\BuyNowEvent', (data) => {
      this.product.status = data.status;
      this.UserService.getEmail(data.id_bidder).subscribe(data => {
        this.bidder = data[0].email;
      })
    });



  }
  getDetail(id: any): void {

    this.ProductService.getDetail(id).subscribe(data => {
      this.product = data;
      const tempProduct = {
        id_category: this.product.category,
        id_product: this.product.id_product
      }
      this.ProductService.getRelativeProduct(tempProduct).subscribe(data => {
        this.relativeProduct = data;
        console.log(this.relativeProduct);
      })

      //status wishlist

      //status wishlist
      this.UserService.getEmail(this.product.id_seller).subscribe(data => {
        this.seller = data[0].email;
      })
      this.UserService.getEmail(this.product.id_bidder).subscribe(data => {
        this.bidder = data[0].email;
      })
      this.formData = new FormGroup({
        txtBid: new FormControl('', Validators.compose([
          Validators.required,
        ])
        ),
      });
    });

  }
  bid(): void {
    const email = localStorage.getItem('email');
    const money = localStorage.getItem('money');
    const curPrice = this.currentPrice;
    const user_id = localStorage.getItem('user_id');
    console.log(curPrice);
    console.log(this.currentPrice);

    if (email != null) {
      const id = this.route.snapshot.paramMap.get('id');
      this.ProductService.getDetail(id).subscribe(data => {
        this.product = data;
        if (parseInt(user_id) == this.product.id_seller) {
          this.msg = "Seller can't bid the product";
          this.buy = false;
          this.check = false;
        }
        else {
          if (parseInt(user_id) == this.product.id_bidder) {
            this.msg = "You are highest bidder";
            this.buy = false;
            this.check = false;
          }
          else {
            if (curPrice < this.product.current_price + this.product.step_price || curPrice == null) {
              this.msg = "This price not be allow";
              this.buy = false;
              this.check = false;
            }
            else {
              if (money < curPrice) {
                this.msg = 'Your account not enough money to bid';
                this.buy = false;
                this.check = false;
              }
              else {
                if (curPrice > this.product.last_price) {
                  this.msg = "Your price is over " + (this.formatNumber(curPrice - this.product.last_price)) + " buynow";
                  this.buy = true;
                  this.check = false;
                }
                else {
                  this.msg = 'Accept to bid your price pls';
                  this.buy = false;
                  this.check = true;

                }

              }
            }
          }

        }


      })
    }
    else {
      this.msg = 'Login before bid please';
      this.buy = false;
      this.check = false;
    }
  }
  checkBuy() {
    const email = localStorage.getItem('email');
    const money: any = localStorage.getItem('money');
    const user_id = localStorage.getItem('user_id');
    if (email != null) {
      if (parseInt(user_id) == this.product.id_seller) {
        this.msgBuy = "Seller can't bid the product";
      }
      else {
        if (parseInt(user_id) == this.product.id_bidder) {
          this.msgBuy = "You are highest bidder";
        }
        else {
          if (money < this.product.last_price) {
            this.msgBuy = "Your account not enough money to buy";
          }
          else {
            this.msgBuy = "Do you decide to buy it?";
          }
        }
      }
    }
    else {
      this.msgBuy = "Login before bid please";
    }
  }
  buyNow() {
    const email = localStorage.getItem('email');
    const money: any = localStorage.getItem('money');
    const id = this.route.snapshot.paramMap.get('id');

    if (email != null) {
      if (money > this.product.last_price) {
        this.msg = 'Accept to bid';
        const user: any = {
          id_bidder: localStorage.getItem('user_id'),
          id_seller: this.product.id_seller,
          id_product: this.product.id_product,
          priceBid: this.product.last_price,
        };
        this.BidService.buyNow(user).subscribe(data => { });

      }
      else {
        this.msg = 'Your account not enough money to buy';
      }
    }
    else this.msg = 'Login before bid please';
  }

  formatNumber(price: Number): String {
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ".");
  }

  accept() {
    if (this.id_bidder != this.product.id_seller) {
      const id = this.route.snapshot.paramMap.get('id');
      const curPrice = this.currentPrice;
      const user: any = {
        id_bidder: localStorage.getItem('user_id'),
        id_seller: this.product.id_seller,
        id_product: this.product.id_product,
        priceBid: curPrice,
      };
      this.BidService.bid(user).subscribe(data => { });
    }
    else alert('Seller cant bid the product')
  }

  wishList() {

    if (localStorage.getItem('user_id') != null) {
      if (this.checklist == 1) {
        this.checklist = 0;
      }
      else this.checklist = 1;
      const user = {
        id_user: localStorage.getItem('user_id'),
        id_product: this.product.id_product,
        status: this.checklist,
      }
      this.ProductService.wishlist(user).subscribe(data => {
      })

    }
    else {
      alert('Login first to add to wishlist');
    }


  }
  statusWishlist() {
    const user = {
      id_product: this.route.snapshot.paramMap.get('id'),
      id_user: localStorage.getItem('user_id'),
    }
    this.UserService.wishStatus(user).subscribe(data => {
      this.checklist = data.status;
      console.log(this.checklist);
    })
  }
}
