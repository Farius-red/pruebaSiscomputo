import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegacionContactosComponent } from './menu-navegacion-contactos.component';

describe('MenuNavegacionContactosComponent', () => {
  let component: MenuNavegacionContactosComponent;
  let fixture: ComponentFixture<MenuNavegacionContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavegacionContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavegacionContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
