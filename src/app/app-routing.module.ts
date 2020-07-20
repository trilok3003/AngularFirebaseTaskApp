import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoUndoneComponent } from './todo-undone/todo-undone.component';
import { AllComponent } from './all/all.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { TodosComponent } from './todos/todos.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CreateSubCategoryComponent } from './sub-category/create-sub-category/create-sub-category.component';
import { ListSubCategoryComponent } from './sub-category/list-sub-category/list-sub-category.component';


const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  {path: 'todos', component: TodosComponent, children: [
  { path: '', redirectTo: 'undone', pathMatch: 'full' },
    { path: 'todos1', component: TodoListComponent },
    { path: 'add', component: CreateTodoComponent },
    { path: 'done', component: TodoDoneComponent },
    {path: 'undone', component: TodoUndoneComponent},
    {path: 'all', component: AllComponent},
  ]},
  {path: 'categories', component: CategoryComponent, children: [
  { path: '', redirectTo: 'categoryList', pathMatch: 'full' },
    {path: 'createCategory', component: CreateCategoryComponent},
    {path: 'categoryList', component: CategoryListComponent},
  ]},
  {path: 'subCategories', component: SubCategoryComponent, children: [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
    {path: 'create', component: CreateSubCategoryComponent},
    {path: 'list', component: ListSubCategoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
