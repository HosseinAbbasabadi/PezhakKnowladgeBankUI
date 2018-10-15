export class ChosenAnswer {
    answerId: number;
    questionInquirerId: number;
    questionId: number;

    constructor(answerId: number, questionInquirerId: number, questionId: number) {
        this.answerId = answerId,
        this.questionInquirerId = questionInquirerId
        this.questionId = questionId;
    }
}