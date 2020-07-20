import { Injectable } from '@angular/core';
import { Item } from './item';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private basePath: string = '/items';

  items: AngularFirestoreCollection<Item[]> = null; //  list of objects
  item: AngularFirestoreCollection<Item> = null; //   single object
  constructor(private db: AngularFirestore) { }

  getItemsList(query={}) {
    // return this.db.collection('items').valueChanges();
    return this.db.collection('items').snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );

  }

  // Return a single observable item
  getItem(key: string){
   return this.db.doc('items/' + key).snapshotChanges();
  }
  createItem(item: Item)  {
    return this.db.collection('items').add({...item}).catch(error => this.handleError(error));
  }


  // Update an existing item
  updateItem(key: string, value: any) {
    console.log(key)
    this.db.doc('items/' + key).update(value).catch(error => this.handleError(error));
  }

  // Deletes a single item
  deleteItem(key: string) {
    this.db.doc('items/' + key).delete().catch(error => this.handleError(error));
  }

  // Deletes the entire list of items
  deleteAll() {
    this.db.doc('items/').delete().catch(error => this.handleError(error));
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }
}
