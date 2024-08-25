import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';
import { Users } from './../users';
import { map, startWith } from 'rxjs/operators';

const CACHE_KEY = 'httpCache';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  paginationarr: number[] = [1, 2, 3];
  cureentIndex: number = 1;
  totelPage: number = 0;
  userData: Users[] = [];
  errorMessage: string = '';
  term: string = '';
  isLoading: boolean = false;
  constructor(private _UsersdataService: UsersdataService) {
    this.isLoading = true;
    _UsersdataService.getAllUsers(this.cureentIndex).subscribe({
      next: (response) => {
        this.userData = response.data;
        this.totelPage = response.total_pages;
        localStorage[CACHE_KEY] = JSON.stringify(response.data);
      },
      error: (err) => (this.errorMessage = err),
      complete: () => (this.isLoading = false),
    });
  }

  ngOnInit(): void {}
  sortByName($event: Event): void {
    this.userData = this.userData.sort((a: any, b: any) => {
      return a.name.toLowerCase() - b.name.toLowerCase();
    });
    console.log(this.userData);
  }
  sortByName1($event: Event): void {
    this.userData = this.userData.sort((a: any, b: any) => {
      return b.name.toLowerCase() - a.name.toLowerCase();
    });
    console.log(this.userData);
  }

  getPage(pagNumber: number): void {
    if (pagNumber > this.totelPage) {
      this.cureentIndex = 1;
    } else {
      this.cureentIndex = pagNumber;
    }

    this.isLoading = true;
    this._UsersdataService.getAllUsers(this.cureentIndex).subscribe({
      next: (response) => {
        this.userData = response.data;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => (this.isLoading = false),
    });
  }

  next(): void {
    this.cureentIndex++;
    if (this.cureentIndex > this.totelPage) {
      this.cureentIndex = 1;
    }

    this.isLoading = true;
    this._UsersdataService.getAllUsers(this.cureentIndex).subscribe({
      next: (response) => {
        this.userData = response.data;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => (this.isLoading = false),
    });
  }
  prev(): void {
    this.cureentIndex--;
    if (this.cureentIndex < this.totelPage) {
      this.cureentIndex = 1;
    }
    this.isLoading = true;
    this._UsersdataService.getAllUsers(this.cureentIndex).subscribe({
      next: (response) => {
        this.userData = response.data;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => (this.isLoading = false),
    });
  }
}
