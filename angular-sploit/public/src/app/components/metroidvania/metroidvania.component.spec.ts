import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroidvaniaComponent } from './metroidvania.component';

describe('MetroidvaniaComponent', () => {
  let component: MetroidvaniaComponent;
  let fixture: ComponentFixture<MetroidvaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetroidvaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroidvaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
