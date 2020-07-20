import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  todos: Todo[];
 
  constructor(private TodoService: TodoService) { }
 
  ngOnInit() {
    this.getTodosList();
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
  getTodosList() {
    this.TodoService.getTodosList().subscribe(data => {
      this.todos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Todo;
      })
    });
  }
}
