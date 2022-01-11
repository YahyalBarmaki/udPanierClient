import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyCustomersComponent } from './happy-customers.component';

describe('HappyCustomersComponent', () => {
  let component: HappyCustomersComponent;
  let fixture: ComponentFixture<HappyCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
