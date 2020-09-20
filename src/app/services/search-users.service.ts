import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class SearchUserService {

   constructor(private http: HttpClient) { }

    public getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://api.github.com/users');
    }

    public getAllFollowers(username: String): Observable<User[]> {
        console.log(username);
        return this.http.get<User[]>(`https://api.github.com/users/${username}/followers`);
    }

}