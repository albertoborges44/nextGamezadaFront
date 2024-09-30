import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGamezadaToolbarComponent } from './next-gamezada-toolbar.component';

describe('NextGamezadaToolbarComponent', () => {
  let component: NextGamezadaToolbarComponent;
  let fixture: ComponentFixture<NextGamezadaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGamezadaToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamezadaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
