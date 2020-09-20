import { IRepo } from './../../models/repo.module';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
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
  public reposListSubscription: Subscription;
  
  public username: String;
  public user: IUser;
  public followers: IUser[];
  public repos: IRepo[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private searchUserService: SearchUserService, 
    private activatedRoute: ActivatedRoute 
    ) { }

  ngOnInit() {
    this.username = this.activatedRoute?.snapshot?.queryParams['login'];
    this.updateUser(this.username);
  }

  updateUser(username: String) {
    this.getUserDetails(username);
    this.getFollowers(username);
    this.getRepos(username);
  }

  getUserDetails(username: String) {
    this.usersListSubscription && this.usersListSubscription.unsubscribe();
    this.usersListSubscription = this.searchUserService.getUserDetail(username).subscribe( user => {
      this.user = user;
      this.changeDetectorRef.markForCheck();
    }) 
  }

  getFollowers(username: String) {
    this.followerListSubscription && this.followerListSubscription.unsubscribe();
    this.followerListSubscription = this.searchUserService.getAllFollowers(username).subscribe(followerList => {
      this.followers = followerList;
      this.changeDetectorRef.markForCheck();
    });
  }

  getRepos(username: String) {
    this.reposListSubscription && this.reposListSubscription.unsubscribe();
    this.reposListSubscription = this.searchUserService.getAllRepo(username).subscribe(repos => {
      this.repos = repos;
      this.changeDetectorRef.markForCheck();
    });
  }



  

  ngOnDestroy() {
    this.usersListSubscription && this.usersListSubscription.unsubscribe();
    this.followerListSubscription && this.followerListSubscription.unsubscribe();
    this.reposListSubscription && this.reposListSubscription.unsubscribe();
  }

}
