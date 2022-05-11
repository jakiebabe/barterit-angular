import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { MarketplaceComponent } from './app/marketplace/marketplace.component';

const routes: Routes = [
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
