import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { ShowAllComponent } from './components/show-all/show-all.component';

const routes: Routes = [
  {path: 'todo',component: ShowAllComponent },
  {path:'todo/update/:id', component: UpdateComponent},
  { path: '',   redirectTo: '/todo', pathMatch: 'full'},
  { path: '**', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
