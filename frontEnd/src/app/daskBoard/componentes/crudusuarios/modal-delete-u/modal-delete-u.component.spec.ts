import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteUComponent } from './modal-delete-u.component';

describe('ModalDeleteUComponent', () => {
  let component: ModalDeleteUComponent;
  let fixture: ComponentFixture<ModalDeleteUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
