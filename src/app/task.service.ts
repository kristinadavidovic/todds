import { Injectable } from '@angular/core';

import { WebRequestService } from './web-request.service';

import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  getLists() {
    return this.webRequestService.get('lists');
  }

  getList(listId: string) {
    return this.webRequestService.get(`lists/${listId}`);
  }

  createList(title: string) {
    return this.webRequestService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    return this.webRequestService.patch(`lists/${id}`, { title });
  }

  deleteList(id: string) {
    return this.webRequestService.delete(`lists/${id}`);
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }

  deleteTask(taskid: string, listId: string) {
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskid}`);
  }

  updateTask(listId: string, taskid: string, title: string) {
    return this.webRequestService.patch(`lists/${listId}/tasks/${taskid}`, {
      title,
    });
  }

  complete(task: Task) {
    return this.webRequestService.patch(
      `lists/${task._listId}/tasks/${task._id}`,
      { completed: !task.completed }
    );
  }
}
