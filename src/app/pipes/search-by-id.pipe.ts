import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'searchById'
})
export class SearchByIdPipe implements PipeTransform {

  transform(userID: User[], term: any): User[] {
    if (!userID || !term) {
      return userID;
    }
    return userID.filter(user => user.id == term);
  }
}
