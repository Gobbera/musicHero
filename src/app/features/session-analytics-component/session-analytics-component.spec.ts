import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAnalyticsComponent } from './session-analytics-component';

describe('SessionAnalyticsComponent', () => {
  let component: SessionAnalyticsComponent;
  let fixture: ComponentFixture<SessionAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionAnalyticsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
