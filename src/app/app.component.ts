import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user.model';
import { SearchUserService } from './services/search-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  public searchUserSubscription: Subscription;
  public users: User[];


  constructor(
    private searchUserService: SearchUserService
  ) { }

  ngOnInit() {
    this.searchUserSubscription = this.searchUserService.getJSON().subscribe(userList => {
      this.users = userList;
    });
  }
}

