import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoanalyticsComponent } from './geoanalytics.component';

describe('GeoanalyticsComponent', () => {
  let component: GeoanalyticsComponent;
  let fixture: ComponentFixture<GeoanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoanalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
