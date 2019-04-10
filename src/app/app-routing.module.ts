import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ChangeComponent } from './admin/change/change.component';
import { AdjustComponent } from './admin/adjust/adjust.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/change', component: ChangeComponent},
  { path: 'admin/adjust', component: AdjustComponent},
  { path: 'admin/notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
