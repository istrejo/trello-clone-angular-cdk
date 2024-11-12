import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  todos: ToDo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'Study the basics of Angular framework',
      done: false,
    },
    {
      id: 2,
      title: 'Develop Trello Clone',
      description: 'Create a Trello clone using Angular and Angular CDK',
      done: false,
    },
    {
      id: 3,
      title: 'Write Unit Tests',
      description: 'Write unit tests for the Trello clone application',
      done: false,
    },
    {
      id: 4,
      title: 'Deploy Application',
      description: 'Deploy the Trello clone application to a cloud provider',
      done: false,
    },
    {
      id: 5,
      title: 'Get User Feedback',
      description: 'Collect feedback from users to improve the application',
      done: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<ToDo[]>) {
    console.log(event);
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
