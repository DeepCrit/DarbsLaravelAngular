import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerCComponent } from './date-picker-c.component';

describe('DatePickerCComponent', () => {
  let component: DatePickerCComponent;
  let fixture: ComponentFixture<DatePickerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
