import { ComponentFixture, TestBed } from '@angular/core/testing';

import { presentationComponent } from './presentation.component';

describe('presentationComponent', () => {
  let component: presentationComponent;
  let fixture: ComponentFixture<presentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ presentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(presentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
