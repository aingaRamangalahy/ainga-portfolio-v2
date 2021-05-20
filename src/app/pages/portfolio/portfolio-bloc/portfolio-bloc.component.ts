import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-bloc',
  templateUrl: './portfolio-bloc.component.html',
  styleUrls: ['./portfolio-bloc.component.scss']
})
export class PortfolioBlocComponent implements OnInit {
  @Input() project: any
  @Output() choosed = new EventEmitter<any>();

  isImageLoaded = false;

  constructor() { }

  ngOnInit(): void {
    console.log("init image", this.isImageLoaded)
  }

  projectClicked() {
    this.choosed.emit(this.project)
  }

  getFirst30(text) {
    const textArray = text.split(' ');
    const sliced = text.split(' ').slice(0, 30);
    let res = textArray.length == sliced.length ? `${sliced.join(' ')}` : `${sliced.join(' ')}...`
    return res
  }

  onLoaded(event) {
    this.isImageLoaded = true
    console.log("on loaded", this.isImageLoaded)
  }

}
