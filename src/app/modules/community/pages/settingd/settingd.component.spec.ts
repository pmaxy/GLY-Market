import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingdComponent } from './settingd.component';

describe('SettingdComponent', () => {
  let component: SettingdComponent;
  let fixture: ComponentFixture<SettingdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
