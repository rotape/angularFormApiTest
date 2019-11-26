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
  user: User /*= {
    name: '',
    surname: '',
    bornDate: { day: 1, month: 12, year: 1992 },
    identification: '123456789Z',
    document_type: 'DNI',
    gender: '',
    email: '',
    password: ''
  }*/;
  form: User;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }

  updateUserData() {
     this.http.put(`https://my-json-server.typicode.com/volkz/technical-form/users/${this.user.id}`, this.user).subscribe((res: User) => {
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
