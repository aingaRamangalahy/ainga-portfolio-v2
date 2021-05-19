import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages = [
    {
      name : "home",
      url: "/home"
    },
    {
      name : "resume",
      url: "/resume"
    },
    {
      name : "skills",
      url: "/skills"
    },
    {
      name : "portfolio",
      url: "/portfolio"
    },
    {
      name : "contact",
      url: "/contact"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
