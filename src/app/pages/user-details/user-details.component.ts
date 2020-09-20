import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SearchUserService } from 'src/app/services/search-users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

  public usersListSubscription: Subscription;
  public followerListSubscription: Subscription;
  public users: User[];
  public followers: User[];
  public user: User;
  public username: String;

  constructor(private changeDetectorRef: ChangeDetectorRef, private searchUserService: SearchUserService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.username = this.activatedRoute?.snapshot?.queryParams['login'];
    this.usersListSubscription = this.searchUserService.getAllUsers().subscribe(userList => {
      this.users = userList;
      this.user = this.users.filter(element => element?.login?.toLowerCase() === this.username?.toLowerCase()).filter(el => !!el).shift();
      console.log(this.user);
      this.getNewFollowers(this.user.login);
    });
  }


  getNewFollowers(username: String) {
    console.log('new followers');
    this.followerListSubscription && this.followerListSubscription.unsubscribe();
    this.followerListSubscription = this.searchUserService.getAllFollowers(username).subscribe(followerList => {
      this.followers = followerList
      console.log(this.followers);
      this.changeDetectorRef.markForCheck();
    });
  }

  

  ngOnDestroy() {
    this.usersListSubscription && this.usersListSubscription.unsubscribe();
    this.followerListSubscription && this.followerListSubscription.unsubscribe();
  }

}
