import {
  Directive,
  ElementRef,
  inject,
  input,
  OnChanges,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  public highlightColor = input('');

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightColor()
    );
  }
}
