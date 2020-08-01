import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class Task {
  constructor(
    public taskId: string,
    public description: string,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTask() {
    return this.httpClient.get<Task[]>('http://localhost:8080/tasks');
  }
  getTaskID(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:8080/tasks' + '/' + id );
  }
}
