import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImgComponent } from './detail-img.component';

describe('DetailImgComponent', () => {
  let component: DetailImgComponent;
  let fixture: ComponentFixture<DetailImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailImgComponent]
    });
    fixture = TestBed.createComponent(DetailImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
