import { Product } from './../shared/product';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from './../shared/rest-api.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Products: any = [];

  constructor(    
    public restApi: RestApiService
    ) { 
    
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    return this.restApi.getProducts().subscribe((data: {}) => {
      this.Products = data;
    })
  }

}
