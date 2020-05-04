import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  totalCategory: number
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTotalSubCategoryCount().subscribe(res => {
      this.totalCategory = res.docs.length
     })

    }
}
