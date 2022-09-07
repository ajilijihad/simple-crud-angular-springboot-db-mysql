import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWebsiteComponent } from './home-website.component';

describe('HomeComponent', () => {
  let component: HomeWebsiteComponent;
  let fixture: ComponentFixture<HomeWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
