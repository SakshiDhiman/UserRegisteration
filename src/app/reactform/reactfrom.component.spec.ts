import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactfromComponent } from './reactfrom.component';

describe('ReactfromComponent', () => {
  let component: ReactfromComponent;
  let fixture: ComponentFixture<ReactfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
