import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignyourcartComponent } from './designyourcart.component';

describe('DesignyourcartComponent', () => {
  let component: DesignyourcartComponent;
  let fixture: ComponentFixture<DesignyourcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignyourcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignyourcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
