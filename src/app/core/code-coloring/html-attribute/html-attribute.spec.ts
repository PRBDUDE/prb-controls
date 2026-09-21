import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlAttribute } from './html-attribute';

describe('HtmlAttribute', () => {
  let component: HtmlAttribute;
  let fixture: ComponentFixture<HtmlAttribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlAttribute],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlAttribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
