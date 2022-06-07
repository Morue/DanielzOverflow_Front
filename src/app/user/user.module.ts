import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from '.';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: fromComponents.UserListComponent },
  {
    path: ':id',
    pathMatch: 'full',
    component: fromComponents.UserDetailComponent,
  },
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
