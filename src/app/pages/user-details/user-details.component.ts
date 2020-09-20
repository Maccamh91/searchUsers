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
    this.usersListSubscription = this.searchUserService.getUserDetail(this.username).subscribe( user => {
      this.user = user;
      this.updateUser(this.user);
    }) 
  }

  updateUser(user: IUser) {
    this.user = user;
    this.getFollowers(user);
    this.getRepos(user);
  }

  getFollowers(user: IUser) {
    this.followerListSubscription && this.followerListSubscription.unsubscribe();
    this.followerListSubscription = this.searchUserService.getAllFollowers(user.login).subscribe(followerList => {
      this.followers = followerList;
      this.changeDetectorRef.markForCheck();
    });
  }

  getRepos(user: IUser) {
    this.reposListSubscription && this.reposListSubscription.unsubscribe();
    this.reposListSubscription = this.searchUserService.getAllRepo(user.login).subscribe(repos => {
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
