/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import { Http } from '@angular/http'
import { Country,GridService } from './costing.service'
import { Employee,Service } from './empoloyee'

@Component({
    selector: 'costing-subject',
    styleUrls:['./costing.component.css'],
    templateUrl: 'costing.component.html',
    providers:[GridService,Service]
})
export class Costing implements OnInit{
    countries: Country[];

    constructor(service: GridService) {
        this.countries = service.getCountries();
    }


    onContentReady(e) {
        e.component.option("loadPanel.enabled", false);
    }
    ngOnInit() {
  }

  createModalMarketSum(){
    //this.MarketSumModal.showModal();
  }



}
