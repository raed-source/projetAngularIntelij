import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSnapComponent } from './single-snap.component';

describe('SingleSnapComponent', () => {
  let component: SingleSnapComponent;
  let fixture: ComponentFixture<SingleSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
