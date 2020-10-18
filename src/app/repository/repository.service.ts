import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Repository } from './repository.model';

@Injectable({
    providedIn: "root"
})
export class RepositoryService {
    private url: string = "https://api.github.com/users/diegotorres11/repos";
    repositorySelected = new Subject<string>();

    constructor(private client: HttpClient) {

    }

    getRepositories(): Observable<Repository[]> {
        return this.client.get<Repository[]>(this.url);
    }
}