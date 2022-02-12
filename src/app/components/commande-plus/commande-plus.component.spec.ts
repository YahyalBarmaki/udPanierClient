import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePlusComponent } from './commande-plus.component';

describe('CommandePlusComponent', () => {
  let component: CommandePlusComponent;
  let fixture: ComponentFixture<CommandePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
