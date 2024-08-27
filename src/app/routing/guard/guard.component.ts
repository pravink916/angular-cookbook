import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, take, tap } from 'rxjs';

 type User = {
  name: string
}

@Component({
  selector: 'app-guard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.scss'
})
export class GuardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(take(1), tap(data => console.log(data['user']))).subscribe();
  }


  


}
