import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HeroFormComponent } from './hero/hero-form.component';
//import 來實作路由
import { RouterModule, Routes } from '@angular/router';

//可以導向component或
const myRoutes: Routes = [
  { path: 'initPage', redirectTo: '/goInit', pathMatch: 'full' },
  { path: 'productListPage', component: ProductListComponent },
  //url 、導向的component
  { path: 'goForm', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
