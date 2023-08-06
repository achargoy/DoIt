import { Component } from "@angular/core";

@Component({
    selector: 'doit-tasks',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent{
    pageTitle: string = 'Tasks!';
}