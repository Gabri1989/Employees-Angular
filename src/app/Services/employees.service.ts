import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string="https://localhost:7217";
  constructor(private http:HttpClient) { }
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("https://localhost:7217"+'/api/controller');
  }
}
