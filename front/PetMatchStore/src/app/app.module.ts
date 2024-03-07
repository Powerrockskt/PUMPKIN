import { NgModule } from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { AppRoutingModule }             from './app-routing.module';
import { AppComponent }                 from './app.component';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { MatFormFieldModule }           from '@angular/material/form-field';
import { MatInputModule }               from '@angular/material/input';
import { MatRippleModule }              from '@angular/material/core';
import { MatIconModule }                from '@angular/material/icon';
import { UserService }                  from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatListModule }                from '@angular/material/list';
import { MatProgressSpinnerModule }     from '@angular/material/progress-spinner';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './pages/home/home.component';
import { ItensHomeComponent } from './components/itens-home/itens-home.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent, 
    ListUserComponent, 
    HomeComponent,
    ItensHomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    SharedModule
  ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
