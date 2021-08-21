import { Component, Input, OnInit } from '@angular/core';
import { ForkOwner } from 'src/app/models/fork-owner';
import { Gist } from 'src/app/models/gist';
import { GithubGistService } from 'src/app/services/github-gist.service';

@Component({
  selector: 'app-gist-element',
  templateUrl: './gist-element.component.html',
  styleUrls: ['./gist-element.component.css']
})
export class GistElementComponent implements OnInit {
  @Input() gist: Gist;

  forksOwners: ForkOwner[] = [];
  constructor(private githubGist: GithubGistService) { }

  ngOnInit(): void {
    this.githubGist.getGistsForksFromRawURL(this.gist.forksUrl).subscribe(
      forks => {
        this.forksOwners = forks.slice(0,3).map(f => f.owner as ForkOwner)
        console.log(this.forksOwners);
      }
        
    )
  }

}
