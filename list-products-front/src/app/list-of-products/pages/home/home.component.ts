import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DataBaseProduct } from 'src/app/interfaces/DataBaseProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService:DataService) {}
products!:DataBaseProduct[];
  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data) => {
      this.products = data.slice(0,5);
    });
  }
}
