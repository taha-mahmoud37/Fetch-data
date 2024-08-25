import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersdataService } from '../usersdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _UsersdataService: UsersdataService
  ) {}

  ngOnInit(): void {
    let { id } = this._ActivatedRoute.snapshot.params;
    this._UsersdataService.getuser(id).subscribe({
      next: (response) => {
        this.user = response.data;
        console.log(this.user);
      },
    });
  }
}
