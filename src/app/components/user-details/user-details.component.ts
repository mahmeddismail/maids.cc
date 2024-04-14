import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private _UserServiceService: UserServiceService, private _ActivatedRoute: ActivatedRoute) { }

  userDetailData: User|null = null
  movieId: string | null = '';

  ngOnInit(): void {
    this.getUserId();
    this.userDetails()
  }
  getUserId() {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.movieId = p.get('id')
    })
  }


  userDetails() {
    this._UserServiceService.userDetailsData(this.movieId).subscribe({
      next: (res: any) => {
        this.userDetailData = res.data
        console.log(this.userDetailData);
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }
}
