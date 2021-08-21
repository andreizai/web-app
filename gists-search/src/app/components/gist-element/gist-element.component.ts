import { Component, Input, OnInit } from '@angular/core';
import { Gist } from 'src/app/models/gist';

@Component({
  selector: 'app-gist-element',
  templateUrl: './gist-element.component.html',
  styleUrls: ['./gist-element.component.css']
})
export class GistElementComponent implements OnInit {

  @Input() gist: Gist;

  constructor() { }

  ngOnInit(): void {
  }

}
