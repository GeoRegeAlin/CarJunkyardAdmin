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
    constructor(private vehicleService:VehicleService)
    {

    }
    ngOnInit():void{
        this.mySub=this.vehicleService.getVehicles().subscribe(vehicles=>this.vehicles=vehicles)   
    }
}
