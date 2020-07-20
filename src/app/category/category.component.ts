import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  totalCategory: number
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTotalCategoryCount().subscribe(res => {
      this.totalCategory = res.docs.length
     })
  }

}
