import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GistFile } from 'src/app/models/gist-file';
import { GithubGistService } from 'src/app/services/github-gist.service';
import { PreviewFileDialogComponent } from '../preview-file-dialog/preview-file-dialog.component';

@Component({
  selector: 'app-gist-fils-grid',
  templateUrl: './gist-fils-grid.component.html',
  styleUrls: ['./gist-fils-grid.component.css']
})
export class GistFilsGridComponent implements OnInit {

  @Input() files: any;

  dataSource = [];
  displayedColumns: string[] = ['name', 'type'];
  constructor(private githubGist: GithubGistService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.parseFilesToDataSource();
  }

  private parseFilesToDataSource(): void {
    const filesKeys = Object.keys(this.files);
    const dataSource: GistFile[] = [];
    for (let file of filesKeys) {
      dataSource.push(this.files[file] as GistFile);
    }
    this.dataSource = dataSource;
  }

  onFilesClick(file: GistFile) {
    // debugger;
    // this.githubGist.getFromRawURL(file.rawUrl).subscribe()
    const dialogRed = this.dialog.open(PreviewFileDialogComponent, {
      // position: {
      //   top: '10px',
      //   right: '10px'
      // },
      // height: '98%',
      // width: '100vw',
      data: {
        file
      }
    });
  }

}
