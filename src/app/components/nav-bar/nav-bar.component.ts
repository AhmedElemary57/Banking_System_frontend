import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  link: string = this.router.url;
  constructor(private router:Router) { }

  ngOnInit(): void {
      this.link=this.router.url;
      console.log(this.link + " link");
  }

}
