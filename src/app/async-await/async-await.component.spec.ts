import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAwaitComponent } from './async-await.component';

describe('AsyncAwaitComponent', () => {
  let component: AsyncAwaitComponent;
  let fixture: ComponentFixture<AsyncAwaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncAwaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
