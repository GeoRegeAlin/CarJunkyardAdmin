import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Engine } from '../Engine';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  id:number;
  engine:Engine;
  constructor(private vehicleService:VehicleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('carId'));
    this.vehicleService.getEngine(this.id).subscribe(x=>
      {this.engine=x
    });
  }

}
