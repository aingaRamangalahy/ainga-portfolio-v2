import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-bloc',
  templateUrl: './resume-bloc.component.html',
  styleUrls: ['./resume-bloc.component.scss']
})
export class ResumeBlocComponent implements OnInit {
  @Input() name: string;
  @Input() date: string;
  @Input() desc: string;
  @Input() descArray: string[]
  @Input() stack: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
