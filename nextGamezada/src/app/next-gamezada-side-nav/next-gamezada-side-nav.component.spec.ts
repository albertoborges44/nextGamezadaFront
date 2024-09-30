import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NextGamezadaSideNavComponent } from './next-gamezada-side-nav.component';

describe('NextGamezadaSideNavComponent', () => {
  let component: NextGamezadaSideNavComponent;
  let fixture: ComponentFixture<NextGamezadaSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGamezadaSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamezadaSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
