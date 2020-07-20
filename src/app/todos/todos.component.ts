import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  doneCount: number;
  notdoneCount: number
  allCount: number
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoDoneCount().subscribe(res => {
      this.doneCount = res.docs.length
     })
     this.todoService.getTodoNotDoneCount().subscribe(res => {
      this.notdoneCount = res.docs.length
     })
     this.todoService.getTodoAllCount().subscribe(res => {
      this.allCount = res.docs.length
     })
  }

}
