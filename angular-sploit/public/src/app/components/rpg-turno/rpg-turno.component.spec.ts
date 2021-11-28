import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgTurnoComponent } from './rpg-turno.component';

describe('RpgTurnoComponent', () => {
  let component: RpgTurnoComponent;
  let fixture: ComponentFixture<RpgTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
