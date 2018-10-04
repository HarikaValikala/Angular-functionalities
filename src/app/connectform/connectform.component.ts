import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CompareService } from '../compare.service';

@Component({
  selector: 'app-connectform',
  templateUrl: './connectform.component.html',
  styleUrls: ['./connectform.component.css']
})
export class ConnectformComponent implements OnInit {

  connectForm: FormGroup;
  constructor(private from:FormBuilder , private _form:CompareService ) 
  {this.formCreate(); }
  formCreate() {
    this.connectForm = this.from.group({
      dbName: ['', Validators.required ],
      idAddress: ['', Validators.required ],
      userName:['',Validators.required],
      password:['', Validators.required]
    });
   
  }

  ngOnInit() {
  }

}
