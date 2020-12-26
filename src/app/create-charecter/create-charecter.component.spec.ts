import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharecterComponent } from './create-charecter.component';

describe('CreateCharecterComponent', () => {
  let component: CreateCharecterComponent;
  let fixture: ComponentFixture<CreateCharecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCharecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
