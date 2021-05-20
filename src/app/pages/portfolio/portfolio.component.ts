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
        { path: "assets/projects/pimp/1.png"},
        { path: "assets/projects/pimp/2.png"},
      ],
      description: `Design and development of a web application for the management of 3D resources of the company W3D.
      The user can download a zip file containing the 3D elements. From the upload interface, the user can describe the contents of the zip file (extension, category, etc ...).
      Each uploaded file can be downloaded by other users having access to the site.`,
      longDescription: [
        `Creation of APIs with Node JS and express`,
        `Information about each uploaded file is stored in a MongoDB database`,
        `The web application was created with angular`,
        `Using JWT to manage authentication and user sessions`,
      ],
      stack: [
        'Angular (NgRx)',
        'Node JS',
        'Express',
        'MongoDB',
        'JWT',
        'Bitbucket'
      ]
    },
    {
      title: `virtual event Backoffice`,
      images: [
        { path: "assets/projects/salon/1.png"},
        { path: "assets/projects/salon/2.png"},
        { path: "assets/projects/salon/3.png"},
      ],
      description: `Design and development of the backoffice part of a virtual showroom.
      The virtual showroom is a reconstruction of a physical showroom but online. Visitors can access the showroom using their web browser. The virtual showroom was modeled with unity by a team of video game developers.
      On the other hand, from a web application, a commercial of the showroom  can communicate with the visitor through an instant messaging system.`,
      longDescription: [
        `Creation of a real-time communication server with Node JS and socket.io`,
        `Creation of the chat interface with Angular.`,
        `The visitor and the commercial can exchange files`,
        `Messages are persisted in a mongodb database`,
      ],
      stack: [
        'Angular',
        'Node JS',
        'Express',
        'MongoDB',
        'WebRTC',
        'Socket.io',
        'gitlab'
      ]
    },
    {
      title: `Reporting`,
      images: [
        { path: "assets/projects/hellotana/3.png"},
        { path: "assets/projects/hellotana/1.png"},
        { path: "assets/projects/hellotana/2.png"},
        { path: "assets/projects/hellotana/4.png"},
      ],
      description: ` Design and develop the BPO service reporting web application.`,
      longDescription: [],
      stack: [
        'Angular',
        'Java',
        'SpringBoot',
        'MySQL',
      ]
    },
    {
      title: `HTML landing page template`,
      images: [
        { path: "assets/projects/cieno/4.jpg"},
        { path: "assets/projects/cieno/1.png"},
        { path: "assets/projects/cieno/2.png"},
        { path: "assets/projects/cieno/3.png"},
        { path: "assets/projects/cieno/5.png"},
      ],
      description: `Design and create a Developer portfolio template and sell on templatemonser`,
      longDescription: [],
      stack: [
        'HTML',
        'CSS',
        'Jquery',
        'Bootstrap',
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
