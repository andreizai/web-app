import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistElementComponent } from './gist-element.component';

describe('GistElementComponent', () => {
  let component: GistElementComponent;
  let fixture: ComponentFixture<GistElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GistElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
