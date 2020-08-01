import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {DetailsTaskComponent} from './details-task/details-task.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'details/:id', component: DetailsTaskComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
