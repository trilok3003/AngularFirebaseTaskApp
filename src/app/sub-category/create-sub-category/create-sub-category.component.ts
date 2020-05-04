import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/sub-category';
import { TodoService } from 'src/app/todo.service';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {

  subcategory: SubCategory = new SubCategory();

  submitted = false;
  subcategories: SubCategory[];
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

 
  newSubCategory() {
    this.submitted = false;
    this.subcategory = new SubCategory();
  }
 
  save() {
    this.categoryService.createSubCategory(this.subcategory);
    this.subcategory = new SubCategory();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
