import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeSettings } from './pratice-settings';

describe('PraticeSettings', () => {
  let component: PraticeSettings;
  let fixture: ComponentFixture<PraticeSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraticeSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticeSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
