import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { GistFile } from 'src/app/models/gist-file';

@Component({
  selector: 'app-gist-fils-grid',
  templateUrl: './gist-fils-grid.component.html',
  styleUrls: ['./gist-fils-grid.component.css']
})
export class GistFilsGridComponent implements OnInit {

  @Input() files: any;

  dataSource = [];
  displayedColumns: string[] = ['name', 'type'];
  constructor() { }

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

}
