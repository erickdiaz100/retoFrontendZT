import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../commons/card/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListOfProductsRoutingModule } from './list-of-products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,

    CarouselComponent,
    CardComponent,
  ],
  imports: [CommonModule, ListOfProductsRoutingModule, NgbModule, NgxPaginationModule],
  exports: [
    ProductsComponent,
    HomeComponent,
    CarouselComponent,
  ],
  bootstrap: [CarouselComponent],
})
export class ListOfProductsModule {}
