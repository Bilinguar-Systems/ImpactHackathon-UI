import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FarmComponent } from './farm/farm.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent,
  canActivate: [AuthGuard]

},
{
  path: 'farm',
  component: FarmComponent,
  canActivate: [AuthGuard]

},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
