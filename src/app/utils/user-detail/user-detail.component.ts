import { IUser } from './../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
