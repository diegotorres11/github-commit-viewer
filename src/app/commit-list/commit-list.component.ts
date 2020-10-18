import { Component, OnInit, Input } from '@angular/core';
import { CommitService } from './commit.service';
import { RepositoryService } from '../repository/repository.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {
  commits: any[];

  constructor(private commitService: CommitService,
              private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
    this.repositoryService.repositorySelected.subscribe(
      (repository: string) => this.loadCommits(repository)
    );
  }

  loadCommits(repository: string) {
    this.commitService.getCommits(repository).subscribe({
      next: commits => this.commits = commits
    });
  }
}
