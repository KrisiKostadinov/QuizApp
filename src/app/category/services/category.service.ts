import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: AngularFirestoreCollection<Category>;

  constructor(private fs: AngularFirestore) {
    this.categories = this.fs.collection<Category>("categories");
  }

  addCategory(category: Category) {
    return this.categories.add(category);
  }

  getAll() {
    return this.categories.valueChanges({ idField: "id" });
  }

  getById(id: string) {
    return this.categories.doc(id).valueChanges();
  }

  dismissCategory(id: string) {
    return this.categories.doc(id).delete();
  }

}
