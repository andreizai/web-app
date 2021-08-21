import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from './material-module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GistElementComponent } from './components/gist-element/gist-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpResponseParserService } from './services/http-response-parser.service';
import { GistFilsGridComponent } from './components/gist-fils-grid/gist-fils-grid.component';
import { PreviewFileDialogComponent } from './components/preview-file-dialog/preview-file-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GistElementComponent,
    GistFilsGridComponent,
    PreviewFileDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseParserService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
