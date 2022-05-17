import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.models';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(data => {
      this.messages = data;
      console.log("messages :" + data);
    });
  }

}
