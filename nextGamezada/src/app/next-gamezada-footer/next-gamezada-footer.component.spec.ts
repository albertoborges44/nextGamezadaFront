import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGamezadaFooterComponent } from './next-gamezada-footer.component';

describe('NextGamezadaFooterComponent', () => {
  let component: NextGamezadaFooterComponent;
  let fixture: ComponentFixture<NextGamezadaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGamezadaFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamezadaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
