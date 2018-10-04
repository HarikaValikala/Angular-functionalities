import { Component, OnInit } from '@angular/core';
import { CompareService } from '../compare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  
  trgtDbs: any;


  constructor(private _service:CompareService , private router: Router) { }

  ngOnInit() {
    this._service.Target().subscribe(res => {
      debugger;
      this.trgtDbs = res;
      console.log(this.trgtDbs);
    })
 
  }

}
