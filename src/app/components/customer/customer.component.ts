import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../Models/Transaction";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  transactions?: Transaction[];
  constructor() {

  }

  ngOnInit(): void {
  }

}
