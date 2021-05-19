import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedProject: any;

  projects = [
    {
      title: `3D Ressources management`,
      images: [
        { path: "assets/project1.jpg"},
        { path: "assets/project2.jpg"},
        { path: "assets/project3.jpg"},
      ],
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro ipsam, aut dolorem sint mollitia voluptates? Voluptatem tempore nesciunt ullam, eligendi repudiandae dolor, doloribus quaerat officiis incidunt porro in corrupti.`,
      longDescription: [
        `lorem ipsum dolor sit amet consectur adipisicing elit`,
        `lorem ipsum dolor sit amet consectur adipisicing elit`,
        `lorem ipsum dolor sit amet consectur adipisicing elit`,
      ],
      stack: [
        'Angular (NgRx)',
        'Node JS',
        'Express',
        'MongoDB',
        'Bitbucket'
      ]
    },
    {
      title: `virtual event Backoffice`,
      images: [
        { path: "assets/project2.jpg"},
        { path: "assets/project1.jpg"},
        { path: "assets/project3.jpg"},
      ],
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro ipsam, aut dolorem sint mollitia voluptates? Voluptatem tempore nesciunt ullam, eligendi repudiandae dolor, doloribus quaerat officiis incidunt porro in corrupti.`,
      longDescription: [
        `lorem ipsum dolor sit amet consectur adipisicing elit`,
        `lorem ipsum dolor sit amet consectur adipisicing elit`,
        `lorem ipsum dolor sit amet consectur adipisicing elit`,
      ],
      stack: [
        'Angular (NgRx)',
        'Node JS',
        'Express',
        'MongoDB',
        'gitlab'
      ]
    },
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openPortfolio(event, template) {
    console.log("choosed", event)
    this.selectedProject = event;

    this.modalService.open(template, { size: 'lg' })
  }

}
