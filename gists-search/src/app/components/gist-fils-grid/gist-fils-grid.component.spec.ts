import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistFilsGridComponent } from './gist-fils-grid.component';

describe('GistFilsGridComponent', () => {
  let component: GistFilsGridComponent;
  let fixture: ComponentFixture<GistFilsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GistFilsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GistFilsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
