import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: AngularFirestoreCollection<Question>;

  constructor(
    private fs: AngularFirestore) {
      this.questions = this.fs.collection<Question>("questions");
    }

  getAll() {
    return this.questions.valueChanges({ idField: 'id' });
  }

  addQuestion(question: Question) {
    return this.questions.add(question);
  }

  getById(id: string) {
    return this.questions.doc(id).valueChanges();
  }

  removeQuestion(id: string) {
    return this.questions.doc(id).delete();
  }

  editQuestion(id: string, question: Question) {
    return this.questions.doc(id).set(question, { merge: true });
  }

}
