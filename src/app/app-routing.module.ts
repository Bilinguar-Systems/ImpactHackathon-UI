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
  component: HomeComponent,
  data: { animation: { value: 'home' } }
},
{
  path: 'about',
  component: AboutComponent,
  canActivate: [AuthGuard],
  data: { animation: { value: 'about' } }

},
{
  path: 'farm',
  component: FarmComponent,
  canActivate: [AuthGuard],
  data: { animation: { value: 'farm' } }

},
{
  path: 'login',
  component: LoginComponent,
  data: { animation: { value: 'login' } }
},
{
  path: 'register',
  component: RegisterComponent,
  data: { animation: { value: 'pageA' } }
},
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
