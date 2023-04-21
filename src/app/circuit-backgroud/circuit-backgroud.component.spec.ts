import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBackgroudComponent } from './circuit-backgroud.component';

describe('CircuitBackgroudComponent', () => {
  let component: CircuitBackgroudComponent;
  let fixture: ComponentFixture<CircuitBackgroudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitBackgroudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitBackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
