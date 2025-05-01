import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoplanningComponent } from './geoplanning.component';

describe('GeoplanningComponent', () => {
  let component: GeoplanningComponent;
  let fixture: ComponentFixture<GeoplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoplanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
