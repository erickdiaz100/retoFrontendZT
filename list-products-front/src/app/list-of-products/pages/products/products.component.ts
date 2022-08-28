import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'ngx-pagination';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[PaginationService]
})
export class ProductsComponent implements OnInit {
  products = [];
  p: number = 1;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
