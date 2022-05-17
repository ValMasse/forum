import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSujetComponent } from './detail-sujet.component';

describe('DetailSujetComponent', () => {
  let component: DetailSujetComponent;
  let fixture: ComponentFixture<DetailSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
