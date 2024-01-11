import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signcredentials!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  // Easy access for form fields
  get email() {
    return this.signcredentials.get('email');
  }

  get password() {
    return this.signcredentials.get('password');
  }

  get name() {
    return this.signcredentials.get('name');
  }

  get location() {
    return this.signcredentials.get('location');
  }

  ngOnInit() {
    this.signcredentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      location: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]],
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.signcredentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
