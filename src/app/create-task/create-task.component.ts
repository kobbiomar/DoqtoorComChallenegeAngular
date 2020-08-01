import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClientService, Task} from '../service/http-client.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task('', '');

  constructor(private httpClientService: HttpClientService,
              private router: Router) { }

  ngOnInit() {
  }

  createTask(): void {
    this.httpClientService.createTask(this.task)
      .subscribe( data => {
        console.log(data);
      });
    this.router.navigate(['/']);
  }
}

