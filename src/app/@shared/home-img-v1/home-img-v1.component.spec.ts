import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImgV1Component } from './home-img-v1.component';

describe('HomeImgV1Component', () => {
  let component: HomeImgV1Component;
  let fixture: ComponentFixture<HomeImgV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImgV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImgV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
