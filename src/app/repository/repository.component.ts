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
  @Output() repositorySelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.loadRepositories();
  }

  loadRepositories() {
    this.repositoryService.getRepositories().subscribe({
      next: repositories => this.repositories = repositories
    });
  }

  onRepositoryChanged(repository: any) {
    this.repositorySelected.emit(repository);
  }
}
