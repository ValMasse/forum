import { Message } from "./message.models";

export class Subject {

    id: string;
    title: string;
    like: number;
    createdDate: Date;
    updatedDate: Date;
    messages: Message[];

    constructor(id: string, title: string, like: number, createdDate: Date, updatedDate: Date, messages: Message[]){
        this.id = id;
        this.title = title;
        this.like = like;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.messages = messages;
    }



}