import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  @Input() user: IUser;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  newFollowers() {
    this.userSelected.emit(this.user);
  }

}
