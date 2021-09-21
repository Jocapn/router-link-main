import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: 'Jovan' },
    { id: 2, name: 'Nikola' },
    { id: 3, name: 'Zoran' },
    { id: 4, name: 'Marko' },
    { id: 5, name: 'Vojin' },
  ];

  onSelect(users: any) {
    this.router.navigate(['/users', users.name, users.id]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
