import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/routing/about/about.component';
import { ListenComponent } from './components/routing/listen/listen.component';
import { PhotosComponent } from './components/routing/photos/photos.component';
import { ContactsComponent } from './components/routing/contacts/contacts.component';
import { WatchComponent } from './components/routing/watch/watch.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReleasesComponent } from './components/routing/releases/releases.component';
import { LocalizationPipe, SafePipe } from './pipes/Pipes';
import { InitializationService } from './services/initialization/initialization.service';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: AboutComponent }
];

export function init_app(initializationService: InitializationService) {
  return () => initializationService.init();
}

@NgModule({
  declarations: [
    LocalizationPipe,
    SafePipe,
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ListenComponent,
    PhotosComponent,
    ContactsComponent,
    WatchComponent,
    FooterComponent,
    ReleasesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxImageGalleryModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [InitializationService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
