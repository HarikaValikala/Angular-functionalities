import { Component, OnInit } from '@angular/core';
import { CompareService } from '../compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  dataSource: any;
  dataTarget: any;
  keys: any;
  trgtKey: any;
  column: any;
  col: any;
  trgtColumn: any;
  trgt: any;
  colDom: any;
  columnDom: any;
  sourcesdata: any;
  targetsdata: any;

  constructor(private _compare: CompareService) { }

  ngOnInit() {

    this._compare.Source().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    })

    this._compare.Target().subscribe(res => {
      this.dataTarget = res;
      console.log(this.dataTarget);
    })
  }

  sourceData(){
    this._compare.keyValue().subscribe(res => {
      this.keys = res;
      console.log(this.keys);
    })
  }

  targetData(){
    this._compare.keyValue().subscribe(res => {
      this.trgtKey = res;
      console.log(this.trgtKey);
    })
  }

  keyData(){
    this._compare.compare().subscribe(res => {
      this.column = res;
      this.col = this.column.sql;
      this.sourcesdata = JSON.stringify(this.col);
      console.log(this.col);
    })
  }

  targetKeyData(){
    this._compare.compare().subscribe(res => {
      this.trgtColumn = res;
      this.trgt = this.trgtColumn.sql;
      this.targetsdata = JSON.stringify(this.trgt);
      console.log(this.trgt);
    })
  }

  DOM(){
    this._compare.compare().subscribe(res => {
      this.colDom = res;
      this.columnDom = this.colDom.sql;
      console.log(this.columnDom);
    })
  }

  Compare(){
    if(this.sourcesdata === this.targetsdata){
    alert("no errors")
    }
    else{
    alert("Some errors occured")
    }
    }
}

