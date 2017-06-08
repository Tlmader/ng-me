import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheodoricComponent } from './theodoric.component';

describe('TheodoricComponent', () => {
  let component: TheodoricComponent;
  let fixture: ComponentFixture<TheodoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheodoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheodoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
