import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';
import { By } from '@angular/platform-browser';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelComponent);
    fixture.componentRef.setInput('text', '');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text from param', () => {
    // Arrange / Given
    const expectedText = 'text-exemplo';
    fixture.componentRef.setInput('text', expectedText);

    // Act / When
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(
      By.css('[data-test-id="paragraph"]')
    ).nativeElement as HTMLParagraphElement;

    // Assert / Then
    expect(paragraph.textContent).toBe(expectedText);
  });
});
