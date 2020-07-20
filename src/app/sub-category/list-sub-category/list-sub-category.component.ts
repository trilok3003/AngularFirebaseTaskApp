import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/sub-category';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-list-sub-category',
  templateUrl: './list-sub-category.component.html',
  styleUrls: ['./list-sub-category.component.css']
})
export class ListSubCategoryComponent implements OnInit {

  categories: SubCategory[];
 
  constructor(private TodoService: TodoService) { }
 
  ngOnInit() {
    this.getCategoryList();
  }
 
  updateActive(category: SubCategory, isActive: boolean) {
    this.TodoService
      .updateSubCategory(category.id, { active: isActive })
      // .catch(err => console.log(err));
  }
 
  deletecategory(category: SubCategory) {
    this.TodoService
      .deleteAll(category.id)
      // .catch(err => console.log(err));
  }
  getCategoryList() {
    this.TodoService.getSubCategoryList().subscribe(data => {
      this.categories = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as SubCategory;
      })
    });
  }
}
