import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileclaim',
  templateUrl: './fileclaim.component.html',
  styleUrls: ['./fileclaim.component.scss']
})
export class FileclaimComponent implements OnInit {
  ques1: string[] = ['Yes,I have the device', 'No,I  do not have device'];
  constructor() { }

  ngOnInit(): void {
  }

}
