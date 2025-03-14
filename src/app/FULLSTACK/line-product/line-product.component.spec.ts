import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineProductComponent } from './line-product.component';

describe('LineProductComponent', () => {
  let component: LineProductComponent;
  let fixture: ComponentFixture<LineProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
