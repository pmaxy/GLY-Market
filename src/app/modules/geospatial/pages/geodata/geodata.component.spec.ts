import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeodataComponent } from './geodata.component';

describe('GeodataComponent', () => {
  let component: GeodataComponent;
  let fixture: ComponentFixture<GeodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeodataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
