import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {AngularFireModule} from '@angular/fire';
import { AngularFireModule } from "@angular/fire/compat";
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {NgxTypedJsModule} from 'ngx-typed-js';

// import {AngularFireModule} from '@angular/fire';
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import  { environment } from '../environments/environment';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CrudService} from './service/crud.service';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HomeComponent } from './components/home/home.component';
import { AchievementsComponent } from './components/home/achievements/achievements.component';




@NgModule({
  declarations: [
    AppComponent,

    SearchFilterPipe,

    HomeComponent,
     AchievementsComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxTypedJsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

  ],
  providers: [CrudService,
  { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],

  bootstrap: [AppComponent]
})
export class AppModule { }



