import { IRepo } from './../../models/repo.module';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRepoComponent implements OnInit {

  @Input() repo: IRepo;

  constructor() { }

  ngOnInit(): void {
  }

}
