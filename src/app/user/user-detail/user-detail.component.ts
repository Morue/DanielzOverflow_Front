import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { delay, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.user$ = this.route.paramMap.pipe(
    //   delay(1500), // Simuleert vertraging
    //   tap((params: ParamMap) => console.log('user.id = ', params.get('id'))),
    //   switchMap((params: ParamMap) =>
    //     this.userService.getById(parseInt(params.get('id'), 10))
    //   ),
    //   tap(console.log)
    // );
  }

  ngOnDestroy(): void {
    // Cleanup, niet nodig wanneer je geen subscribe gebruikt.
    // this.paramSubscription.unsubscribe();
  }
}
