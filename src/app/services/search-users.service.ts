import { IRepo } from './../models/repo.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable()
export class SearchUserService {

   constructor(private http: HttpClient) { }

    public getAllUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://api.github.com/users');
    }

    public getUserDetail(username: String): Observable<IUser> {
        return this.http.get<IUser>(`https://api.github.com/users/${username}`);
    }

    public getAllFollowers(username: String): Observable<IUser[]> {
        return this.http.get<IUser[]>(`https://api.github.com/users/${username}/followers`);
    }

    public getAllRepo(username: String): Observable<IRepo[]> {
        return this.http.get<IRepo[]>(`https://api.github.com/users/${username}/repos`);
    }

}