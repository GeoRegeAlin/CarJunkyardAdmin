import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from '../Car';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  title:string='Vehicles List';
    private mySub:Subscription;
    vehicles:Car[];
    brands:string[];
    constructor(private vehicleService:VehicleService)
    {
    }
    ngOnInit():void{
        this.vehicleService.getVehicles().subscribe(vehicles=>
          {this.vehicles=vehicles,
          this.getUniqueBrands(this.vehicles)
        });

    }
    getUniqueBrands(vehicle:Car[]):void{
      this.brands=this.vehicles.map(s=>s.brand)
      this.brands=this.brands.filter((el, i, a) => i === a.indexOf(el));
    }
}
