import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class SearchUserService {

   constructor(private http: HttpClient) {
        this.getJSON().subscribe();
    }

    public getJSON(): Observable<User[]> {
        return this.http.get<User[]>('https://api.github.com/users');
    }
}