/**
 * Created by Tony on 2017/3/14.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Service,Country} from "./grid.service";

@Component({
    selector: 'ac-grid',
    templateUrl: 'grid.component.html',
    styles: ['th{border: 1px solid #ccc} td{border: 1px solid #ccc}'],
    encapsulation: ViewEncapsulation.None,
     providers: [Service]
})
export class Grid implements OnInit {
  countries: Country[];

  constructor(service: Service){
    this.countries = service.getCountries();

  }

    ngOnInit() { }

}
