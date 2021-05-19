import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      name: 'Angular',
      className: "devicon-angularjs-plain colored",
      level: '70'
    },
    {
      name: 'NodeJs',
      className: "devicon-nodejs-plain colored",
      level: '65'
    },
    {
      name: 'Express',
      className: "devicon-express-original colored",
      level: '70'
    },
    {
      name: 'MongoDB',
      className: "devicon-mongodb-plain colored",
      level: '60'
    },
    {
      name: 'MySQL',
      className: "devicon-mysql-plain colored",
      level: '70'
    },
    {
      name: 'Spring Boot',
      className: "devicon-spring-plain colored",
      level: '50'
    },
    {
      name: 'Git',
      className: "devicon-git-plain colored",
      level: '60'
    },
    {
      name: 'HTML',
      className: "devicon-html5-plain colored",
      level: '90'
    },
    {
      name: 'CSS',
      className: "devicon-css3-plain colored",
      level: '85'
    },
    {
      name: 'Javascript',
      className: "devicon-javascript-plain colored",
      level: '75'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
