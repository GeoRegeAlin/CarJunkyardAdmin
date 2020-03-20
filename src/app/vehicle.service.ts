import { Injectable } from "@angular/core";
import { Car } from './Car';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Engine } from './Engine';

@Injectable({
    providedIn:'root'
})
export class VehicleService{
    private getUrl='https://localhost:44336/cars';
    private addUrl='https://localhost:44336/addCar';

    constructor(private http:HttpClient){}
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
    }
    getVehicles():Observable<Car[]>
    {
        return this.http.get<Car[]>(this.getUrl);
    }
    getSpecificVehicles(brand:string):Observable<Car[]>
    {
        return this.http.get<Car[]>(this.getUrl+'/'+brand);     
    }
    addVehicle(car:Car):Observable<Car>{
        return this.http.post<Car>(this.addUrl,car,this.httpOptions);
    }
    deleteCar(id:number):Observable<any>
    {
        return this.http.delete<Car>(this.getUrl+'/'+id);
    }
    getEngine(id:number):Observable<Engine>
    {
        return this.http.get<Engine>(this.getUrl+'/'+id+'/engine')
    }
}