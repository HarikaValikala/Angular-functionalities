import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(private http:HttpClient) { }

  Source(){
    return this.http.get("http://localhost:3000/source");
  }

  Target(){
    return this.http.get("http://localhost:3000/target");
  }

  keyValue(){
    return this.http.get("src/assets/keyvalue.json");
  }

  compare(){
    return this.http.get("src/assets/tabledata.json");
  }

}
