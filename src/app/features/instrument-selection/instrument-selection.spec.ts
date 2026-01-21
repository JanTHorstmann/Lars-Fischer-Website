import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentSelection } from './instrument-selection';

describe('InstrumentSelection', () => {
  let component: InstrumentSelection;
  let fixture: ComponentFixture<InstrumentSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
