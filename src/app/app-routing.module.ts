import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandSpecificComponent } from './brand-specific/brand-specific.component';
import { CarListComponent } from './car-list/car-list.component';
import { PartsComponent } from './parts/parts.component';


const routes: Routes = [
  { path: 'brand/:brand', component: BrandSpecificComponent },
  {path:':brand/:carId',component:PartsComponent},
  {path:'',component:CarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
