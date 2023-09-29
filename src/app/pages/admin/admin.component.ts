import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  constructor(
    public router: Router,
    private loginService: LoginService
  ) { }

  onLogout() {
    this.loginService.removeToken();
    this.router.navigate(["/login"])
  }
}
