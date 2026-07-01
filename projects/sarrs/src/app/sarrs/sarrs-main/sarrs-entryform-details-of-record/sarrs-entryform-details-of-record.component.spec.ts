import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarrsEntryformDetailsOfRecordComponent } from './sarrs-entryform-details-of-record.component';

describe('SarrsEntryformDetailsOfRecordComponent', () => {
  let component: SarrsEntryformDetailsOfRecordComponent;
  let fixture: ComponentFixture<SarrsEntryformDetailsOfRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SarrsEntryformDetailsOfRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarrsEntryformDetailsOfRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
