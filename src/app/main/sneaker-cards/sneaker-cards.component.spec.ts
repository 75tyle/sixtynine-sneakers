import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCardsComponent } from './sneaker-cards.component';

describe('SneakerCardsComponent', () => {
  let component: SneakerCardsComponent;
  let fixture: ComponentFixture<SneakerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
