import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaproprecarteComponent } from './taproprecarte.component';

describe('TaproprecarteComponent', () => {
  let component: TaproprecarteComponent;
  let fixture: ComponentFixture<TaproprecarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaproprecarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaproprecarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
