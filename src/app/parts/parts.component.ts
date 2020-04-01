import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Engine } from '../Engine';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddEngineComponent } from '../add-engine/add-engine.component';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  id:number;
  engine:Engine;
  newEngine:Engine={
    id:0,
    price:0,
    Capacity:0,
    Cylinders:0,    
    carId:0   
  }
  constructor(private vehicleService:VehicleService,
    private route: ActivatedRoute,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('carId'));
    this.vehicleService.getEngine(this.id).subscribe(x=>
      {
        this.engine=x
    });
  }
  openDialog(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width='500px';
    dialogConfig.height='500px';
    let dialog=this.dialog.open(AddEngineComponent,dialogConfig)
    this.newEngine.carId=this.id;
    dialog.afterClosed().subscribe(
      data => {
        this.newEngine.Capacity=parseInt(data.capacity);
        this.newEngine.Cylinders=parseInt(data.cylinders);
        this.newEngine.price=parseInt(data.price);
        this.vehicleService.addEngine(this.newEngine).subscribe();
      }
    );
    
  }

}
