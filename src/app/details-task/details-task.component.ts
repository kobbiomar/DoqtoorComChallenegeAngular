import { Component, OnInit, Input } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService, Task } from '../service/http-client.service';
@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent implements OnInit {

  id: number;
  task: Task;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClientService: HttpClientService) { }

  ngOnInit() {

    this.task = new Task('', '');

    this.id = this.route.snapshot.params.id;

    this.httpClientService.getTaskID(this.id.toString())
      .subscribe(data => {
        console.log(data);
        this.task = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/']);
  }
}

