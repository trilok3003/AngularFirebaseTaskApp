import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  todo: Todo = new Todo();
  submitted = false;
 
  constructor(public todoService: TodoService) { }
 
  ngOnInit() {
  }
 
  newtodo() {
    this.submitted = false;
    this.todo = new Todo();
  }
 
  save() {
    this.todoService.createTodo(this.todo);
    this.todo = new Todo();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
