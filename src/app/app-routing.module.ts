import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SingleItemComponent } from './single-item/single-item.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },

  { path: 'list', component: ListComponent },
  {
    path: 'item/:id',
    component: SingleItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
