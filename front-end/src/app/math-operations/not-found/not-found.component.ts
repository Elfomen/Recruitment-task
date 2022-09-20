import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="notfoundContainer container">
      <img src="" alt="">
      <h1 class="center">This page does not exist</h1>
      <a class="center" (click)="goBackToHome()">Go back to home page</a>
    </div>
  `,
  styles: [
  ] ,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  goBackToHome(){
    this.router.navigate(['/'])
  }

}
