import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommitService } from './commit.service';
import { RepositoryService } from '../repository/repository.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit, OnDestroy {
  commits: any[];
  private repoSelectedSub: Subscription;

  constructor(private commitService: CommitService,
              private repositoryService: RepositoryService) {
  }

  ngOnDestroy(): void {
    this.repoSelectedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.repoSelectedSub = this.repositoryService.repositorySelected.subscribe(
      (repository: string) => this.loadCommits(repository)
    );
  }

  loadCommits(repository: string) {
    this.commitService.getCommits(repository).subscribe({
      next: commits => this.commits = commits
    });
  }
}
