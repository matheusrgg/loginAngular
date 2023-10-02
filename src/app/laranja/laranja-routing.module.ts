import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { UvaComponent } from './pages/uva/uva.component';

const routes: Routes = [

  { path: 'uva', component: UvaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PagesModule],
  exports: [RouterModule]
})
export class LaranjaRoutingModule { }
