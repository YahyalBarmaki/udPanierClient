import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminPanelComponent } from './home-admin-panel.component';

describe('HomeAdminPanelComponent', () => {
  let component: HomeAdminPanelComponent;
  let fixture: ComponentFixture<HomeAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
