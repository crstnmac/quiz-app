import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
})
export class ChangeBgDirective {
  @Input() isCorrect: Boolean = false;
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') answer() {
    if (this.isCorrect) {
      this.render.addClass(this.el.nativeElement, 'bg-green-800');
      this.render.addClass(this.el.nativeElement, 'text-white');
      this.render.addClass(this.el.nativeElement, 'border-2');
      this.render.addClass(this.el.nativeElement, 'border-gray-800');
    } else {
      this.render.addClass(this.el.nativeElement, 'bg-red-500');
      this.render.addClass(this.el.nativeElement, 'text-white');
      this.render.addClass(this.el.nativeElement, 'border-2');
      this.render.addClass(this.el.nativeElement, 'border-gray-800');
    }
  }
}
