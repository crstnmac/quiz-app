import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appChangeBg]",
})
export class ChangeBgDirective {
  @Input() isCorrect: Boolean = false;
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener("click") answer() {
    if (this.isCorrect) {
      this.render.addClass(this.el.nativeElement, "bg-green-600");
    } else {
      this.render.addClass(this.el.nativeElement, "bg-red-600");
    }
  }
}
