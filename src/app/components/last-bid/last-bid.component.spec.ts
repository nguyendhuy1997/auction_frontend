import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBidComponent } from './last-bid.component';

describe('LastBidComponent', () => {
  let component: LastBidComponent;
  let fixture: ComponentFixture<LastBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
