import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMatComponent } from './menu-mat.component';

describe('MenuMatComponent', () => {
  let component: MenuMatComponent;
  let fixture: ComponentFixture<MenuMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
