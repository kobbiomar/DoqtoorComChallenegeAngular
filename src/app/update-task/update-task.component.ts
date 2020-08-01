import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService, Task } from '../service/http-client.service';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id: number;
  task: Task = new Task('', '');

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClientService: HttpClientService) { }

  ngOnInit() {

  }

  updateTask() {
    this.id = this.route.snapshot.params.id;
    this.httpClientService.updateTask(this.id.toString(), this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/']);

  }

}
