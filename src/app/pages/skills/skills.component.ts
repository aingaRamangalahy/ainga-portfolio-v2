import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  progLanguages = [
    {
      name: 'Javascript',
      className: 'devicon-javascript-plain',
      level: '75',
    },
    {
      name: 'Typescript',
      className: 'devicon-typescript-plain',
      level: '75',
    },
    {
      name: 'Java',
      className: 'devicon-java-plain',
      level: '55',
    },
    // {
    //   name: 'PHP',
    //   className: 'devicon-php-plain',
    //   level: '70',
    // },
  ];
  frameworks = [
    {
      name: 'Angular',
      className: 'devicon-angularjs-plain',
      level: '70',
    },
    {
      name: 'NodeJs',
      className: 'devicon-nodejs-plain',
      level: '65',
    },
    {
      name: 'Express',
      className: 'devicon-express-original',
      level: '70',
    },
    // {
    //   name: 'Spring Boot',
    //   className: 'devicon-spring-plain',
    //   level: '50',
    // },
  ];
  databases = [
    {
      name: 'MongoDB',
      className: 'devicon-mongodb-plain',
      level: '60',
    },
    {
      name: 'MySQL',
      className: 'devicon-mysql-plain',
      level: '70',
    },
  ];
  versioning = [
    {
      name: 'Git',
      className: 'devicon-git-plain',
      level: '60',
    },
    {
      name: 'GitHub',
      className: 'devicon-github-original',
      level: '70',
    },
    // {
    //   name: 'GitLab',
    //   className: 'devicon-gitlab-plain',
    //   level: '60',
    // },
    // {
    //   name: 'Bitbucket',
    //   className: 'devicon-bitbucket-original',
    //   level: '65',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
