import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoAbertoComponent } from './mundo-aberto.component';

describe('MundoAbertoComponent', () => {
  let component: MundoAbertoComponent;
  let fixture: ComponentFixture<MundoAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MundoAbertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MundoAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
