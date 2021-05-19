import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-bloc',
  templateUrl: './skills-bloc.component.html',
  styleUrls: ['./skills-bloc.component.scss']
})
export class SkillsBlocComponent implements OnInit {
  @Input() skill: any

  constructor() { }

  ngOnInit(): void {
  }

}
