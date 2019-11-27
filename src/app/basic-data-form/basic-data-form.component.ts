import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-basic-data-form',
  templateUrl: './basic-data-form.component.html',
  styleUrls: ['./basic-data-form.component.less']
})
export class BasicDataFormComponent implements OnInit {
  faCoffee = faCoffee;
  user: User = {
    id: 0,
    name: '',
    surname: '',
    bornDate: { day: 0, month: 0, year: 1982 },
    identification: '',
    document_type: 'DNI',
    gender: 'man',
    email: '',
    confirmEmail: '',
    password: '',
    matchingPassword: '',
    address: ''
  };
  documents = ['dni', 'passport'];
  mustMatchError = false;
  emailError = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }
  checkEmails() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      this.user.email !== this.user.confirmEmail ||
      !regex.test(this.user.email)
    ) {
      this.emailError = true;
    } else {
      this.emailError = false;
    }
  }
  checkPasswords() {
    if (this.user.password !== this.user.matchingPassword) {
      this.mustMatchError = true;
    } else {
      this.mustMatchError = false;
    }
  }
  updateUserPassword() {
    this.http
      .put(
        `https://my-json-server.typicode.com/volkz/technical-form/users/${this.user.id}`,
        this.user
      )
      .subscribe((res: User) => {
        this.user = res;
      });
  }
  updateUserData() {
    this.http
      .put(
        `https://my-json-server.typicode.com/volkz/technical-form/users/${this.user.id}`,
        this.user
      )
      .subscribe((res: User) => {
        this.user = res;
      });
  }
  getUserData(user?: number) {
    let value: number;
    user ? (value = user) : (value = 1);
    this.http
      .get(
        `https://my-json-server.typicode.com/volkz/technical-form/users/${value}`
      )
      .subscribe((res: User) => {
        this.user = res;
      });
  }
}
