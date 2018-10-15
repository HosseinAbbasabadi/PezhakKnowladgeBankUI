import { Tag } from "./tag.model";

export class QuestionModel {
    id: number;
    title: string;
    inquirer: string;
    hasTrueAnswer: boolean;
    creationDateTime: string;
    tags: Array<Tag>;
    views: number;
    votes: number;
    answers: number;
}