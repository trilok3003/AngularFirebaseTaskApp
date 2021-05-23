import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFirebaseTodo';
  select = 'categories';
  constructor(public router: Router, public todoService: TodoService) {
  }
  // onChange(e) {
  //   if(e) {
  //     if( this.select === 'todos') {
  //       this.router.navigate(['todos']);
  //   }
  //   if( this.select === 'categories') {
  //     this.router.navigate(['categories']);
  // }
  //   else {
  //     this.router.navigate(['subCategories'])
  //   }
  // }
  //   }  
  onChange(e) {
    if(e) {
      this.router.navigate([this.select]);
     }
    } 
}
