import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBlocComponent } from './skills-bloc.component';

describe('SkillsBlocComponent', () => {
  let component: SkillsBlocComponent;
  let fixture: ComponentFixture<SkillsBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
