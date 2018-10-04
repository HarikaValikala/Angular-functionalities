import { Component, OnInit } from '@angular/core';
import { CompareService } from '../compare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  srcDbs: any;
  srcData: any;

  constructor(private _service:CompareService , private router: Router) { }

  ngOnInit() {
    this._service.Source().subscribe(res => {
      debugger;
      this.srcDbs = res;
      // this.srcData = this.srcDbs.source;
      console.log(this.srcData);
    })
 
  }



}
