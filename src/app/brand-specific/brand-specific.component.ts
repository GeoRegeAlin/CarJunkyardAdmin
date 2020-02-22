import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Car } from '../Car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-specific',
  templateUrl: './brand-specific.component.html',
  styleUrls: ['./brand-specific.component.css']
})
export class BrandSpecificComponent implements OnInit {
  vehicles:Car[];
  brand:string;
  constructor(private vehicleService:VehicleService,
    private route: ActivatedRoute)
  {
  }

  ngOnInit() {
    this.brand = this.route.snapshot.paramMap.get('brand');
    this.vehicleService.getSpecificVehicles(this.brand).subscribe(vehicles=>
      {this.vehicles=vehicles
    });
  }

}
