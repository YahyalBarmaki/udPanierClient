import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecardComponent } from './demandecard.component';

describe('DemandecardComponent', () => {
  let component: DemandecardComponent;
  let fixture: ComponentFixture<DemandecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
