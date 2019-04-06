import { Component, OnInit, Input } from '@angular/core';
import Product from '../../models/product';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Product;
  constructor( private _DomSanitizationService: DomSanitizer) { }
  formatNumber(price: Number): String {
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ".");
  }
  ngOnInit() {
  }

}
