import { Injectable } from "@angular/core";
import { Car } from './Car';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

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
    async getSpecificVehicle(id:number)
    {
        const response=this.http.get<Car>(this.getUrl+'/'+id).toPromise();
        return response;        
    }
    addVehicle(car:Car):Observable<Car>{
        return this.http.post<Car>(this.addUrl,car,this.httpOptions);
    }
    deleteCar(id:number):Observable<any>
    {
        return this.http.delete<Car>(this.getUrl+'/'+id);
    }
}