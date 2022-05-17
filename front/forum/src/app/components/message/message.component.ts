import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message : any;

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
  }

  like(){
    this.service.like(this.message.id).subscribe((data) => {
      console.log("Jaime");
    });
    this.message.like += 1;
  }

  unLike(){
    this.service.unLike(this.message.id).subscribe((data) => {
      console.log("Jaime pas");
    });
    this.message.like -= 1;
  }

}
