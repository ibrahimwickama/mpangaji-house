import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmntListingComponent } from './apartmnt-listing.component';

describe('ApartmntListingComponent', () => {
  let component: ApartmntListingComponent;
  let fixture: ComponentFixture<ApartmntListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmntListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmntListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
