import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedsComponent } from './newsfeeds.component';

describe('NewsfeedsComponent', () => {
  let component: NewsfeedsComponent;
  let fixture: ComponentFixture<NewsfeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsfeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
