import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalRangeComponent } from './rental-range.component';

describe('RentalRangeComponent', () => {
  let component: RentalRangeComponent;
  let fixture: ComponentFixture<RentalRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
