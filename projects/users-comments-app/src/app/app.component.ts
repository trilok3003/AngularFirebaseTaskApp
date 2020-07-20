import { Component } from '@angular/core';
import { DbService } from './db.service';
import {Seed} from './seed'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-comments-app';
  comments;
  data
  constructor(public db: DbService) { }

  ngOnInit() {
    this.comments = this.db.getComments();
    // this.db.getComments1().subscribe(res => {
    //   this.data = res.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } ;
    //   })
    //   console.log(this.data);
    // })
  }

}
