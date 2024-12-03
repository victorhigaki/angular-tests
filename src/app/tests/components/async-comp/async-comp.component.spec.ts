import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCompComponent } from './async-comp.component';
import { ApiService } from '../../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

const expectedApiFruits = ['uva', 'morango'];

describe('AsyncCompComponent', () => {
  let component: AsyncCompComponent;
  let fixture: ComponentFixture<AsyncCompComponent>;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getFruits']);
    apiServiceMock.getFruits.and.returnValue(of(expectedApiFruits));

    await TestBed.configureTestingModule({
      imports: [AsyncCompComponent, HttpClientTestingModule],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    }).compileComponents();

    apiServiceMock = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(AsyncCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fruits api on Init', () => {
    fixture.detectChanges();
    expect(apiServiceMock.getFruits).toHaveBeenCalled();
  });

  it('should call fruits api on Init', () => {
    fixture.detectChanges();
    expect(apiServiceMock.getFruits).toHaveBeenCalled();
  });

  it('should render fruits from api', () => {
    fixture.detectChanges();
    const spanElements = fixture.debugElement.queryAll(
      By.css('[data-test-id="fruits"]')
    );
    spanElements.forEach((spanElement) => {
      const hasFruit = expectedApiFruits.includes(
        (spanElement.nativeElement as HTMLElement).textContent!.trim()
      );
      expect(hasFruit).toBe(true);
    });
  });
});
