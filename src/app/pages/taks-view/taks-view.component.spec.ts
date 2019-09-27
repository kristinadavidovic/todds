import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksViewComponent } from './taks-view.component';

describe('TaksViewComponent', () => {
  let component: TaksViewComponent;
  let fixture: ComponentFixture<TaksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
