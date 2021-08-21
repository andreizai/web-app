import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { Gist } from 'src/app/models/gist';
import { GithubGistService } from 'src/app/services/github-gist.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private username: string = "";
  usernameFormControl = new FormControl(null, [Validators.required]);
  gists: Gist[] = [];

  constructor(private githubGist: GithubGistService) { }

  ngOnInit(): void {
    this.usernameFormControl.setValue('santisbon');
  }

  onUsernameGistSearch(): void {
    this.username = this.usernameFormControl.value;
    this.githubGist.getUsersGists(this.username).subscribe(
      values => this.gists = values
    )
  }

}
