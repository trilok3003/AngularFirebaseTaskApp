import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postRef: AngularFirestoreDocument<any>;
  post$: Observable<any>;

  commentsRef: AngularFirestoreCollection<any>;
  comments$: Observable<any>;

  formValue: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postRef = this.afs.doc('posts/testPost')
    this.commentsRef = this.postRef.collection('comments', ref => ref.orderBy('createdAt', 'desc') )
    this.post$ = this.postRef.valueChanges();
  }

  addComment() {
    this.commentsRef.add({ content: this.formValue, createdAt: new Date() })
    this.formValue = '';
  }

  loadMore() {
    this.comments$ = this.commentsRef.valueChanges();
  }
}
