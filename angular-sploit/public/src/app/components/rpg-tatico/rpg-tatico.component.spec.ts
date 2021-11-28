import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgTaticoComponent } from './rpg-tatico.component';

describe('RpgTaticoComponent', () => {
  let component: RpgTaticoComponent;
  let fixture: ComponentFixture<RpgTaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgTaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgTaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
