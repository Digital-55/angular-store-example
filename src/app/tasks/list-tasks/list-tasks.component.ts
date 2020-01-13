import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task } from './../task.model';
import { AppState } from './../../app.state';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  // Definimos el observable:
  tasks: Observable<Task[]>;
  constructor(
    private store: Store<AppState>
  ) { 
    // Accedemos a la store:
    this.tasks = this.store.select('tasks');
  }

  ngOnInit() {
  }

}
