import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/models/subject.models';
import { SujetsService } from 'src/app/services/sujets.service';

@Component({
  selector: 'app-detail-sujet',
  templateUrl: './detail-sujet.component.html',
  styleUrls: ['./detail-sujet.component.css']
})
export class DetailSujetComponent implements OnInit {

  sujet !: Subject;
  id: string;
  nbr !: number;

  constructor(private service: SujetsService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("ID2: " + this.id);
   }

  ngOnInit(): void {
    this.initSubjects();
    console.log("ID" + this.id);
  }

  initSubjects(){
    this.service.findById(this.id).subscribe((data) => {
      this.sujet = data;
      console.log("data", data);
    })
  }

  like(){
    this.service.like(this.sujet.id).subscribe((data) => {
      console.log("Jaime");
    });
    this.sujet.like += 1;
  }

  unLike(){
    this.service.unLike(this.sujet.id).subscribe((data) => {
      console.log("Jaime pas");
    });
    this.sujet.like -= 1;
  }

}
