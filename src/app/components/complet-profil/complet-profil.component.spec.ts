import { ComponentFixture, TestBed } from '@angular/core/testing';

import { completProfilComponent } from './complet-profil.component';

describe('CompletProfilComponent', () => {
  let component: completProfilComponent;
  let fixture: ComponentFixture<completProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ completProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(completProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


