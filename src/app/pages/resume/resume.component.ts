import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resumeUnivs = [
    {
      name: `University of Fianarantsoa - National School of Computer Science`,
      date: `2018-2020`,
      description: `Master degree in Computer Science`,
    },
    {
      name: `University of Fianarantsoa - National School of Computer Science`,
      date: `2015-2018`,
      description: `Bachelor degree in Computer Science`,
    },
  ];

  resumeExperiences = [
    {
      name: `W3D Madagascar - MEAN Stack developer`,
      date: `June 2020 - now`,
      descriptions: [
        `Design and develop an application for the management of 3D resources.`,
        `Design and develop the back office part of a virtual event with integration of a real-time chat system`,
      ],
      stack: [
        'Angular (NgRx)',
        'Node JS',
        'Express',
        'MongoDB',
        'WebRTC',
        'Socket.io',
        'Gitlab',
      ],
    },
    {
      name: `Hellotana - Fullstack Web developer`,
      date: `July 2019 - January 2020`,
      descriptions: [
        `Maintain the hellopro.fr website`,
        `Develop new features for the backoffice of the site`,
        `Design and develop the BPO service reporting web application`,
      ],
      stack: ['PHP', 'JQuery', 'Java', 'Angular', 'Spring Boot', 'MySQL'],
    },
  ];

  resumeHackathon = [
    {
      name: `Inter University Hackaton`,
      date: `March 2019`,
      description: `Design and develop Mobile and web application to fight corruption`,
      stack: [
        'IONIC 3',
        'Angular',
        'Java',
        'Spring Boot',
        'MySQL',
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
