import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommitListComponent } from './commit-list/commit-list.component';
import { CommitItemComponent } from './commit-list/commit-item/commit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitListComponent,
    CommitItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
