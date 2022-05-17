import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.models';
import { SujetsService } from 'src/app/services/sujets.service';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css']
})
export class SujetsComponent implements OnInit {

  sujets: Subject[] = [];

  constructor(private service: SujetsService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(data => {
      this.sujets = data;
      console.log("sujets :" + data);
    });
    
  }

}
