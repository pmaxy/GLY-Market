import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoreportsComponent } from './georeports.component';

describe('GeoreportsComponent', () => {
  let component: GeoreportsComponent;
  let fixture: ComponentFixture<GeoreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoreportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
