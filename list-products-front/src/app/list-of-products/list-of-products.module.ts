import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../commons/card/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    AboutUsComponent,
    CarouselComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule, NgbModule, NgxPaginationModule],
  exports: [
    ProductsComponent,
    HomeComponent,
    AboutUsComponent,
    CarouselComponent,
  ],
  bootstrap: [CarouselComponent],
})
export class ListOfProductsModule {}
