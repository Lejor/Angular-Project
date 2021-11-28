import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetatonComponent } from './coletaton.component';

describe('ColetatonComponent', () => {
  let component: ColetatonComponent;
  let fixture: ComponentFixture<ColetatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColetatonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
