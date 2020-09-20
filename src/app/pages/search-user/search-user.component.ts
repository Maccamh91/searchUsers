import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.model';
import { SearchUserService } from 'src/app/services/search-users.service';

@Component({
  selector: 'search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUserComponent implements OnInit, OnDestroy {

  public getUsersListSubscription: Subscription;
  public searchUserSubscription: Subscription;
  public users: IUser[];
  public filteredUsers: IUser[];
  public searchForm = new FormGroup({
    searchUserControl: new FormControl(''),
  });

  constructor(
    private searchUserService: SearchUserService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getUsersListSubscription = this.searchUserService.getAllUsers().subscribe(userList => {
      this.users = userList
      this.changeDetectorRef.markForCheck();
    });

    this.searchUserSubscription = this.searchForm.get('searchUserControl').valueChanges.pipe(debounceTime(200)).subscribe(searched => {
      this.filteredUsers = this.users.filter(element => element.login && element.login.includes(searched));
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.getUsersListSubscription && this.getUsersListSubscription.unsubscribe();
    this.searchUserSubscription && this.searchUserSubscription.unsubscribe();
  }

}