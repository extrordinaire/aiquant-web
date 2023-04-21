import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavmobileComponent } from './sidenavmobile.component';

describe('SidenavmobileComponent', () => {
  let component: SidenavmobileComponent;
  let fixture: ComponentFixture<SidenavmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
