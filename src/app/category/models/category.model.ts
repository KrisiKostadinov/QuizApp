import { Question } from 'src/app/question/models/question.model';

export class Category {
    id?: string;
    title: string;
    questions: Question[];
}