import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverClass]'
})
export class HoverClassDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.el.nativeElement.children[1].children[0].classList.add("colored")
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.el.nativeElement.children[1].children[0].classList.remove("colored")
  }

}
