import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBlocComponent } from './portfolio-bloc.component';

describe('PortfolioBlocComponent', () => {
  let component: PortfolioBlocComponent;
  let fixture: ComponentFixture<PortfolioBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
