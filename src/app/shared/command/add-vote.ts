export class AddVote {
    opinion: boolean;
    questionId: number;

    constructor(opinion: boolean, questionId: number) {
        this.opinion = opinion;
        this.questionId = questionId;
    }
}