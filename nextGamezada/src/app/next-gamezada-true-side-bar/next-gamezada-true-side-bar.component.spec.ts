import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGamezadaTrueSideBarComponent } from './next-gamezada-true-side-bar.component';

describe('NextGamezadaTrueSideBarComponent', () => {
  let component: NextGamezadaTrueSideBarComponent;
  let fixture: ComponentFixture<NextGamezadaTrueSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGamezadaTrueSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamezadaTrueSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
