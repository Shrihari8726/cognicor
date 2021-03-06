import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 1. Importing firebase the libs
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ChordDiagramComponent } from './chord-diagram/chord-diagram.component';
import { PopulationPyramidComponent } from './population-pyramid/population-pyramid.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

var firebaseConfig = {
  apiKey: "AIzaSyCr77sqzVkxM_dAo3tiwVB5hNq7zpSsLC4",
  authDomain: "cognicor-323a1.firebaseapp.com",
  projectId: "cognicor-323a1",
  storageBucket: "cognicor-323a1.appspot.com",
  messagingSenderId: "184076881456",
  appId: "1:184076881456:web:8924b73448600540fee7f5",
  measurementId: "G-HRVRDZ4XHF"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    ChordDiagramComponent,
    PopulationPyramidComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
