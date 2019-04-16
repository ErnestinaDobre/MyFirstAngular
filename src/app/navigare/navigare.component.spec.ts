import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigareComponent } from './navigare.component';

describe('NavigareComponent', () => {
  let component: NavigareComponent;
  let fixture: ComponentFixture<NavigareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
