import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImgV2Component } from './home-img-v2.component';

describe('HomeImgV2Component', () => {
  let component: HomeImgV2Component;
  let fixture: ComponentFixture<HomeImgV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImgV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImgV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
