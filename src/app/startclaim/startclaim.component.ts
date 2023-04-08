import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-startclaim',
  templateUrl: './startclaim.component.html',
  styleUrls: ['./startclaim.component.scss']
})
export class StartclaimComponent implements OnInit, AfterViewInit {

  shiping: string[] = ['Same as policy', 'New Address'];
  date!:string;
  description!:string;
  claim!:string
  titleSelected:any



  titles = ['Mail in Repair', 'In Store Repair', 'Reimbursement'];



  constructor (){}

  
  step1Form = new FormGroup({
    date: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
    claim: new FormControl('', Validators.required),
    checkbox: new FormControl('', Validators.required),
  });

  step2form=new FormGroup({
    foot: new FormControl('',Validators.required),
  })



  ngOnInit() {}

  goNext(progress: ProgressComponent) {
    progress.next();
  }


  select(title:any) {
    this.titleSelected = title;
  }

  onStateChange(event: any) {
    console.log(event);
  }

  ngAfterViewInit() {}
}
