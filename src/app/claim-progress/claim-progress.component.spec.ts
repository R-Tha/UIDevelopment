import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimProgressComponent } from './claim-progress.component';

describe('ClaimProgressComponent', () => {
  let component: ClaimProgressComponent;
  let fixture: ComponentFixture<ClaimProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimProgressComponent ]
    })
    .compileComponents();
    

    fixture = TestBed.createComponent(ClaimProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
