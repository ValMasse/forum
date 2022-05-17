import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.models';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {

  @Input() sujet : any;

  constructor() { }

  ngOnInit(): void {
  }

}
