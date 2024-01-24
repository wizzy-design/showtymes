import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: Auth
  ) {}

  async logout() {
    this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  getUserProfileName() {
    const username = this.auth.currentUser;
    console.log("Hey it's user", username);
    return username;
  }

  ngOnInit() {
    this.getUserProfileName();
  }
}
