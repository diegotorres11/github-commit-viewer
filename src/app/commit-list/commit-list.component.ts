import { Component, OnInit } from '@angular/core';
import { CommitService } from './commit.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {

  commits: any[];

  constructor(private commitService: CommitService) { }

  ngOnInit(): void {
    this.populateCommits();
  }

  populateCommits() {
    this.commitService.getCommits().subscribe({
      next: commits => this.commits = commits
    });
  }
}
