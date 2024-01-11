import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot({}),
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'showtymes-aecc7',
        appId: '1:193254894422:web:24eb374c4a0d0902d384f7',
        storageBucket: 'showtymes-aecc7.appspot.com',
        apiKey: 'AIzaSyArZvHiWs-A4oWOt85mO_xMpWX1zV_BEWU',
        authDomain: 'showtymes-aecc7.firebaseapp.com',
        messagingSenderId: '193254894422',
      })
    ),
    provideAuth(() => getAuth()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
