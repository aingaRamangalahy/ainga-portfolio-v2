import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBlocComponent } from './resume-bloc.component';

describe('ResumeBlocComponent', () => {
  let component: ResumeBlocComponent;
  let fixture: ComponentFixture<ResumeBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
