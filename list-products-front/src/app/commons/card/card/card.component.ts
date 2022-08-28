import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/interfaces/CardInfo';
import { DataBaseProduct } from 'src/app/interfaces/DataBaseProduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()cardInfo!:DataBaseProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
