import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHabbitComponent } from './create-habbit.component';

describe('CreateHabbitComponent', () => {
  let component: CreateHabbitComponent;
  let fixture: ComponentFixture<CreateHabbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHabbitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
