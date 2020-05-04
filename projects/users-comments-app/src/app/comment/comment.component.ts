import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input() commentId;

  comment;

  constructor(private db: DbService) { }

  ngOnInit() {
    this.comment = this.db.getComment(this.commentId);
  }
}
