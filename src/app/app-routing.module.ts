import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {DetailsTaskComponent} from './details-task/details-task.component';
import {UpdateTaskComponent} from './update-task/update-task.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'details/:id', component: DetailsTaskComponent },
  { path: 'update/:id', component: UpdateTaskComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
