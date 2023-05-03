import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"pricelist", component:PriceComponent},
  {path:"gallery", component:GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
