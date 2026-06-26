import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMainComponent } from './steps-main.component';

describe('StepsMainComponent', () => {
  let component: StepsMainComponent;
  let fixture: ComponentFixture<StepsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
