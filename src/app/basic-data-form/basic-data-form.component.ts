import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-basic-data-form',
  templateUrl: './basic-data-form.component.html',
  styleUrls: ['./basic-data-form.component.less']
})
export class BasicDataFormComponent implements OnInit {
  user: User;
  documents = ['dni', 'passport'];
  genders = ['man', 'woman', 'noanswer'];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }

  updateUserData() {
    this.http.put(`https://my-json-server.typicode.com/volkz/technical-form/users/${this.user.id}`, this.user).subscribe((res: User) => {
      this.user = res;
    });
  }

  updateUserPassword() {
    this.http.put(`https://my-json-server.typicode.com/volkz/technical-form/users/${this.user.id}`,
    this.user).subscribe((res: User) => {
      this.user = res;
    });
  }

  getUserData(user?: number) {
    let value: number;
    user ? value = user : value = 1;
    this.http.get(`https://my-json-server.typicode.com/volkz/technical-form/users/${value}`).subscribe((res: User) => {
      this.user = res;
      console.log(this.user);
    });

  }


}
