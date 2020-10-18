import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommitService } from './commit.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit, OnChanges {
  commits: any[];
  @Input() repository: string;

  constructor(private commitService: CommitService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadCommits(this.repository);
  }

  ngOnInit(): void {

  }

  loadCommits(repository: string) {
    this.commitService.getCommits(repository).subscribe({
      next: commits => this.commits = commits
    });
  }
}
