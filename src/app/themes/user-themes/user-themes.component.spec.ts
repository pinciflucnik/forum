import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThemesComponent } from './user-themes.component';

describe('UserThemesComponent', () => {
  let component: UserThemesComponent;
  let fixture: ComponentFixture<UserThemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserThemesComponent]
    });
    fixture = TestBed.createComponent(UserThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
