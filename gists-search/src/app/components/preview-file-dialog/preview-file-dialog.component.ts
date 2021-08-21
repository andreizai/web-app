import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  objectURl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private githubGist: GithubGistService) { }

  ngOnInit(): void {
    debugger;
    this.file = this.data.file;
    this.githubGist.getFromRawURL(this.file.rawUrl).subscribe(
      fileContent => {
        debugger;
        // this.objectURl = URL.createObjectURL(fileContent); 
        // const fileRedear = new FileReader();
        // this.fileContent = fileRedear.readAsText(fileContent);
        this.fileContent = fileContent;
      }
    );
  }

}
