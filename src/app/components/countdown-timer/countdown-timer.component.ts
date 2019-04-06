import { Component, OnInit, Input } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import Product from '../../models/product';
import {BidService} from '../../services/bid-service/bid.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {


  @Input() product: Product;
  distance: number;
  dateTimeToDisplay: string;
  constructor(private BidService:BidService) {
  }

  countDown(): void {
    var countDownDate = new Date(this.product.day_end).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      this.distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";
      this.dateTimeToDisplay = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      // If the count down is finished, write some text 
      if (this.distance < 0 || this.product.status==0) {
        clearInterval(x);
        this.dateTimeToDisplay = 'Expired'
        this.product.status=0;
        this.BidService.countDown(this.product).subscribe(data => {
         console.log(data);
        })
      }
    }.bind(this), 1000);
  }
  ngOnInit() {
    this.countDown();
  }

}
