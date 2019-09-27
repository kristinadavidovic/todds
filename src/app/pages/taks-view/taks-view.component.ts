import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from 'src/app/task.service';

import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-taks-view',
  templateUrl: './taks-view.component.html',
  styleUrls: ['./taks-view.component.scss'],
})
export class TaksViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];

  selectedListId: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.listId) {
        this.selectedListId = params.listId;
        this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      } else {
        this.tasks = undefined;
      }
    });

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(() => {
      console.log('Completed successfully.');
      task.completed = !task.completed;
    });
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe(response => {
      this.router.navigate(['/lists']);
    });
  }

  onTaskDeleteClick(id: string) {
    this.taskService.deleteTask(id, this.selectedListId).subscribe(response => {
      this.tasks = this.tasks.filter(val => val._id !== id);
    });
  }
}
