import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GistFile } from 'src/app/models/gist-file';
import { GithubGistService } from 'src/app/services/github-gist.service';

@Component({
  selector: 'app-preview-file-dialog',
  templateUrl: './preview-file-dialog.component.html',
  styleUrls: ['./preview-file-dialog.component.css']
})
export class PreviewFileDialogComponent implements OnInit {

  file: GistFile;
  fileContent: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private githubGist: GithubGistService) { }

  ngOnInit(): void {
    this.file = this.data.file;
    this.githubGist.getFileContentFromRawURL(this.file.rawUrl).subscribe(
      fileContent => this.fileContent = fileContent
    );
  }

}
