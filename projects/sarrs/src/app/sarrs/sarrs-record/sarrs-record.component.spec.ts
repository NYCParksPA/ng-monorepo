import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarrsRecordComponent } from './sarrs-record.component';

describe('SarrsRecordComponent', () => {
  let component: SarrsRecordComponent;
  let fixture: ComponentFixture<SarrsRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SarrsRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarrsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
