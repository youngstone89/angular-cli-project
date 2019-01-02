import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxPromiseComponent } from './rx-promise.component';

describe('RxPromiseComponent', () => {
  let component: RxPromiseComponent;
  let fixture: ComponentFixture<RxPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
