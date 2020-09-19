import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { SearchUserService } from 'src/app/services/search-users.service';

@Component({
  selector: 'search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, OnDestroy {

  public getUsersListSubscription: Subscription;
  public searchUserSubscription: Subscription;
  public users: User[];
  public filteredUsers: User[];
  public searchForm = new FormGroup({
    searchUserControl: new FormControl(''),
  });

  constructor(
    private searchUserService: SearchUserService
  ) { }

  ngOnInit() {
    this.getUsersListSubscription = this.searchUserService.getJSON().subscribe(userList => {
      this.users = userList;
    });

    this.searchUserSubscription = this.searchForm.get('searchUserControl').valueChanges.pipe(debounceTime(200)).subscribe(searched => {
      this.filteredUsers = this.users.filter(element => element.login.includes(searched))
    });
  }

  ngOnDestroy() {
    this.getUsersListSubscription && this.getUsersListSubscription.unsubscribe();
    this.searchUserSubscription && this.searchUserSubscription.unsubscribe();
  }

}
