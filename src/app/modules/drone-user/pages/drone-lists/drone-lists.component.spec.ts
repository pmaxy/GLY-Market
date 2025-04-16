import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneListsComponent } from './drone-lists.component';

describe('DroneListsComponent', () => {
  let component: DroneListsComponent;
  let fixture: ComponentFixture<DroneListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DroneListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
