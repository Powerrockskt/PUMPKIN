import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensHomeComponent } from './itens-home.component';

describe('ItensHomeComponent', () => {
  let component: ItensHomeComponent;
  let fixture: ComponentFixture<ItensHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
