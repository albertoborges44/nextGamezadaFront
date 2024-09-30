import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGamezadaMainContentPageComponent } from './next-gamezada-main-content-page.component';

describe('NextGamezadaMainContentPageComponent', () => {
  let component: NextGamezadaMainContentPageComponent;
  let fixture: ComponentFixture<NextGamezadaMainContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGamezadaMainContentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamezadaMainContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
