import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../core/api.service';
import { User } from './../../model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  users: any;
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
/*S'il n'est pas connecté ,càd il nya pas un token géneré  ,un redirection vers la page login */
console.log('Affichagd de token ', window.sessionStorage.getItem('token'));
if (!window.sessionStorage.getItem('token')) {
  this.router.navigate(['login']);
  return;

}

  this.apiService.getUsers()
  .subscribe(data => {
    console.log('Affichage des données', data);
    this.users = data;
                   });
  }

  addUser() {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: User) : void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        debugger;
         this.users = this.users.filter(u => u !== user);
      });

  }

  editUser(user : User): void {
    /* mise à jour de sessionStoreage par la nouvelle element à editer  */
    window.sessionStorage.removeItem('editUserId');
    window.sessionStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);

  }
}
