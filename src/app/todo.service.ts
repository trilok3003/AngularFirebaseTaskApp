import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private dbPath = '/todos';
  todoscollection: AngularFirestoreCollection<Todo>;
  todos
  todosRef:AngularFirestoreCollection<Todo> = null;
  constructor(private firestore: AngularFirestore) {
}
  // ***************** Todos ********************//

 
  createTodo(todo: Todo) {
      return this.firestore.collection('todos').add({...todo});
  }
 
  updateTodo(key: any, value: any) {
    this.firestore.doc('todos/' + key).update(value);
  }
 
  getTodosList(): Observable<any> {
    return this.firestore.collection('todos').snapshotChanges();
  }
  getTodosDoneList(): Observable<any> {
    return this.firestore.collection('todos', ref => {
      return ref.where('active', '==', false)
    }).snapshotChanges();
  }
  getTodosNotDoneList(): Observable<any> {
    return this.firestore.collection('todos', ref => {
      return ref.where('active', '==', true)
    }).snapshotChanges();
  }
 
 
  deleteAll(key?) {
    if(key) {
      this.firestore.doc('todos/' + key).delete();
    }
    else {
      this.firestore.doc('todos/').delete();
    }
  }
  // ***************** Category ********************//

  createCategory(category: Category) {
    return this.firestore.collection('categories').add({...category});
}

updateCategory(key: any, value: any) {
  this.firestore.doc('categories/' + key).update(value);
}

getCategoryList(): Observable<any> {
  return this.firestore.collection('categories').snapshotChanges();
}
getCategoryDoneList(): Observable<any> {
  return this.firestore.collection('categories', ref => {
    return ref.where('active', '==', false)
  }).snapshotChanges();
}
getCategoryNotDoneList(): Observable<any> {
  return this.firestore.collection('categories', ref => {
    return ref.where('active', '==', true)
  }).snapshotChanges();
}
getTotalCategoryCount() {
   return this.firestore.collection("categories").get();
}
getTodoDoneCount() {
  return this.firestore.collection("todos", ref => {
    return ref.where('active', '==', false)
  }).get();
}
getTodoNotDoneCount() {
  return this.firestore.collection("todos", ref => {
    return ref.where('active', '==', true)
  }).get();
}
getTodoAllCount() {
  return this.firestore.collection("todos").get();
}
  // ***************** Sub Category ********************//

  createSubCategory(category: SubCategory) {
    return this.firestore.collection('subcategories').add({...category});
}
getSubCategoryList(): Observable<any> {
  return this.firestore.collection('subcategories').snapshotChanges();
}
updateSubCategory(key: any, value: any) {
  this.firestore.doc('subcategories/' + key).update(value);
}
getTotalSubCategoryCount() {
  return this.firestore.collection("subcategories").get();
}
}
