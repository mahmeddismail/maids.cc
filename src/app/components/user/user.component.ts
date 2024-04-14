import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private user: UserServiceService) { }

  ngOnInit(): void {
    this.userData()
  }
users:User[]=[]
searchTerm:string=''


  userData() {
    this.user.userData().subscribe({
      next: (res: any) => {
        this.users=res.data
        console.log(res)
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }
}
