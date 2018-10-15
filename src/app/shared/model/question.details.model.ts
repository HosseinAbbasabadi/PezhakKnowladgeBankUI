import { Tag } from "./tag.model";

export class QuestionDetailsModel {
    id: number;
    title: string;
    body: string;
    inquirer: string;
    inquirerId: number;
    creationDateTime: string;
    tags: Array<Tag>;
    votes: number;
}