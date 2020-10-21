import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenamingenComponent } from './benamingen.component';

describe('BenamingenComponent', () => {
  let component: BenamingenComponent;
  let fixture: ComponentFixture<BenamingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenamingenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenamingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
