import { Component, OnInit } from '@angular/core';
import { FileclaimComponent } from '../fileclaim/fileclaim.component';
import { StartclaimComponent } from '../startclaim/startclaim.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  message = new StartclaimComponent;
  message1 = new FileclaimComponent
  dor=new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
