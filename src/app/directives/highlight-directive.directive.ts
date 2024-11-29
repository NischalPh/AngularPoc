import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";


@Directive({
  selector: "[highLight]",
  standalone: true
})
export class HighlightDirective {


  constructor(private el: ElementRef) {

  }

  @HostBinding('style.backgroundColor')
  backgroundColour = 'red'

  @HostListener('mouseenter')
  increaseFontSizeOnMouseEnter() {
    this.el.nativeElement.style.fontSize = '40px'
  }

  @HostListener('mouseleave')
  resetFontSizeOnMouseLeave() {
    this.el.nativeElement.style.fontSize = '30px'
  }
}