import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartclaimComponent } from './startclaim.component';

describe('StartclaimComponent', () => {
  let component: StartclaimComponent;
  let fixture: ComponentFixture<StartclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
