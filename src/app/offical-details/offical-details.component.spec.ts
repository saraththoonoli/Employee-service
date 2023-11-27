import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficalDetailsComponent } from './offical-details.component';

describe('OfficalDetailsComponent', () => {
  let component: OfficalDetailsComponent;
  let fixture: ComponentFixture<OfficalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
