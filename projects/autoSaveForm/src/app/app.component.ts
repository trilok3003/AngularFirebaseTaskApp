import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore,  } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autoSaveForm';
  myForm: FormGroup;
  myDoc;

  state: string;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      career: ['', Validators.required],
      bio: ['']
    })

    this.myDoc = this.afs.doc('contacts/test').valueChanges();
  }


  changeHandler(e) {
    // console.log(e)
    this.state = e;

  }
}
