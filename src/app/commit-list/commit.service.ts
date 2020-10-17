import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommitService {
    private url: string = "https://api.github.com/repos/diegotorres11/github-commit-viewer/commits";

    constructor(private client: HttpClient) {

    }

    getCommits(): Observable<any[]> {
        return this.client.get<any[]>(this.url);
    }
}