import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {
  @Input() todos: Todo[];
 
  constructor(private TodoService: TodoService) { }
 
  ngOnInit() {
  }
 
  updateActive(todo: Todo, isActive: boolean) {
    this.TodoService
      .updateTodo(todo.key, { active: isActive })
      // .catch(err => console.log(err));
  }
 
  deletetodo(todo: Todo) {
    this.TodoService
      .deleteAll(todo.key)
      // .catch(err => console.log(err));
  }
}
