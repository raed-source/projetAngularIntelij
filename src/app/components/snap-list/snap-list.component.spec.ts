import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapListComponent } from './snap-list.component';

describe('SnapListComponent', () => {
  let component: SnapListComponent;
  let fixture: ComponentFixture<SnapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
