import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isExpanded = false;

  pages = [
    {
      name : "About me",
      url: "/home"
    },
    {
      name : "Resume",
      url: "/resume"
    },
    {
      name : "Skills",
      url: "/skills"
    },
    {
      name : "Portfolio",
      url: "/portfolio"
    },
    {
      name : "Contact",
      url: "/contact"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  // unExpand() {
  //   this.isExpanded = false;
  //   console.log("unexpand", this.isExpanded)
  // }
  isHidden(el) {
    return (el.offsetParent === null)
}


}
