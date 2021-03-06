import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CommitListComponent } from './commit-list/commit-list.component';
import { CommitItemComponent } from './commit-list/commit-item/commit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitListComponent,
    CommitItemComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
