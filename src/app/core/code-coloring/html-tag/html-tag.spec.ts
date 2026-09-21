import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlTag } from './html-tag';

describe('HtmlTag', () => {
  let component: HtmlTag;
  let fixture: ComponentFixture<HtmlTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlTag],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
