import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketClubComponent } from './cricket-club.component';

describe('CricketClubComponent', () => {
  let component: CricketClubComponent;
  let fixture: ComponentFixture<CricketClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
