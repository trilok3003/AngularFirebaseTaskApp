import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
 
  constructor(private TodoService: TodoService) { }
 
  ngOnInit() {
    this.getCategoryList();
  }
 
  updateActive(category: Category, isActive: boolean) {
    this.TodoService
      .updateCategory(category.id, { active: isActive })
      // .catch(err => console.log(err));
  }
 
  deletecategory(category: Category) {
    this.TodoService
      .deleteAll(category.id)
      // .catch(err => console.log(err));
  }
  getCategoryList() {
    this.TodoService.getCategoryList().subscribe(data => {
      this.categories = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Category;
      })
    });
  }
}
