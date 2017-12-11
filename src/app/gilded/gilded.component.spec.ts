import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GildedComponent } from './gilded.component';

describe('GildedComponent', () => {
  let component: GildedComponent;
  let fixture: ComponentFixture<GildedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GildedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GildedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
