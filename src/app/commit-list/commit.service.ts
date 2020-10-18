import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommitService {
    private baseUrl: string = "https://api.github.com/repos/diegotorres11";

    constructor(private client: HttpClient) {
    }

    getCommits(repo: string): Observable<any[]> {
        var url = this.baseUrl + "/" + repo + "/commits";
        return this.client.get<any[]>(url);
    }
}