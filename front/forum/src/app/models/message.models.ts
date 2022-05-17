import { Subject } from "./subject.models";

export class Message {

    id: string;
    content: string;
    like: number;
    createdDate: Date;
    updatedDate: Date;
    subject: Subject;
    
    constructor(id: string, content: string, like: number, createdDate: Date, updatedDate: Date, subject: Subject){
        this.id = id;
        this.content = content;
        this.like = like;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.subject = subject;
    }

}