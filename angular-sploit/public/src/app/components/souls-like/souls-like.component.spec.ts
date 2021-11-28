import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulsLikeComponent } from './souls-like.component';

describe('SoulsLikeComponent', () => {
  let component: SoulsLikeComponent;
  let fixture: ComponentFixture<SoulsLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoulsLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
