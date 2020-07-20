import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/category';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();

  submitted = false;
  categories: Category[];
  constructor(public categoryService: TodoService) { }
 
  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Category;
      })
    });
  }
 
  newCategory() {
    this.submitted = false;
    this.category = new Category();
  }
 
  save() {
    this.categoryService.createCategory(this.category);
    this.category = new Category();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
