import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<span appHighlight [highlightColor]="colorName">Texto</span>`,
  standalone: true,
  imports: [HighlightDirective],
})
class TestHostComponent {
  colorName = 'blue';
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of Host Component', () => {
    expect(component).toBeTruthy();
  });

  it('should change background color based on directive param', () => {
    // Arrange
    const expectedColor = 'red';
    component.colorName = expectedColor;

    // Act
    fixture.detectChanges();

    // Assert
    const elementDirective = fixture.debugElement.query(By.css('span'))
      .nativeElement as HTMLElement;
    expect(elementDirective.style.backgroundColor).toBe(expectedColor);
  });
});
