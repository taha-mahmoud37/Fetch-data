import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { UserapiInterceptor } from './userapi.interceptor';
import { SortdataPipe } from './sortdata.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpCacheInterceptor } from './http-cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,
    SearchPipe,
    SortdataPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register(''),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
