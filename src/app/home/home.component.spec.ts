import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { MockComponent } from 'ng2-mock-component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
      ],
      declarations: [
        HomeComponent,
        MockComponent({ selector: 'app-content', inputs: [ 'content' ] })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of intros', async(() => {
    const element = fixture.nativeElement;
    let abouts = element.querySelectorAll('.intro');
    expect(abouts.length).toBe(2);
  }));

  it('should display the correct number of abouts', async(() => {
    const element = fixture.nativeElement;
    let abouts = element.querySelectorAll('.about');
    expect(abouts.length).toBe(3);
  }));
});
