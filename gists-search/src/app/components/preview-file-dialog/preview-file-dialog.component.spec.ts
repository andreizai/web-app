import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFileDialogComponent } from './preview-file-dialog.component';

describe('PreviewFileDialogComponent', () => {
  let component: PreviewFileDialogComponent;
  let fixture: ComponentFixture<PreviewFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewFileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
