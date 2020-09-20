import { IRepo } from './../../models/repo.module';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRepoComponent {

  @Input() repo: IRepo;

}
