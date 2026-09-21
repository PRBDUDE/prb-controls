import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTag } from './user-tag';

describe('UserTag', () => {
  let component: UserTag;
  let fixture: ComponentFixture<UserTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTag],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
