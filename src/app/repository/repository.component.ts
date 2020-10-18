import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repositories: Repository[];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.loadRepositories();
  }

  loadRepositories() {
    this.repositoryService.getRepositories().subscribe({
      next: repositories => this.repositories = repositories
    });
  }

  onRepositoryChanged(repository: string) {
    this.repositoryService.repositorySelected.next(repository);
  }
}
