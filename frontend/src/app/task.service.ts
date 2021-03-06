import { Injectable } from '@angular/core'
import { WebRequestService } from './web-request.service'
import { Task } from 'src/app/models/task.model'


@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private webReqService: WebRequestService) {}

    // Send a web request to create a list.
    createList(title: string) {
        return this.webReqService.post('lists', { title })
    }

    updateList(listId: string, title: string) {
        return this.webReqService.patch(`lists/${listId}`, { title })
    }

    // Send a web request to create a task.
    createTask(title: string, listId: string) {
        return this.webReqService.post(`lists/${listId}/tasks`, { title })
    }

    updateTask(listId: string, taskId: string, title: string) {
        return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title })
    }

    getLists() {
        return this.webReqService.get('lists')
    }

    getTasks(listId: string) {
        return this.webReqService.get(`lists/${listId}/tasks`)
    }

    completed(task: Task) {
        return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed })
    }

    deleteList(listId: string) {
        return this.webReqService.delete(`lists/${listId}`)
    }

    deleteTask(listId: string, taskId: string) {
        return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`)
    }
}

