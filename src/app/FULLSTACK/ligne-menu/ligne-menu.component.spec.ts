import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneMenuComponent } from './ligne-menu.component';

describe('LigneMenuComponent', () => {
  let component: LigneMenuComponent;
  let fixture: ComponentFixture<LigneMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
