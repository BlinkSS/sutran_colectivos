import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovehiculoComponent } from './registrovehiculo.component';

describe('RegistrovehiculoComponent', () => {
  let component: RegistrovehiculoComponent;
  let fixture: ComponentFixture<RegistrovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrovehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
