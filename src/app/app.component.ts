import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Marketing } from './Layouts/Marketing/marketing.component'
import { MarketingDatas } from './Modals/marketing'
import { MarketingService  } from './Layouts/Marketing/marketing.services'
import { LoginService } from './pages/login/login.services'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MarketingService,LoginService]
})

export class AppComponent implements OnInit {
  marketingDatas : MarketingDatas[];
  hasSubNavbar = false;
  location: Location;
  selectedYear;

  constructor(
    location: Location,
    private marketingService: MarketingService
    ) {
      this.location = location;
       this.marketingService.getMarketingMainData()
        .then(marketingDatas => {
          this.marketingDatas = marketingDatas;
      })
    }
  

  ngOnInit() {
  }
 navGoBack(): void {
    this.location.back();
  }


}