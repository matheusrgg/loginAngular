import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  constructor(public router: Router,) { }

  onLogout() {
    console.log("funfa isso");
    this.router.navigate(["/login"])
  }
}
