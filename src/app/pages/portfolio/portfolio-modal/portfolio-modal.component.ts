import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {
  @Input() project: any;

  constructor() { }

  ngOnInit(): void {
  }

}
