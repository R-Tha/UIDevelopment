import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileclaimComponent } from './fileclaim/fileclaim.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { StartclaimComponent } from './startclaim/startclaim.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ProgressComponent } from './progress/progress.component';
import { ProgressStepComponent } from './progress-step/progress-step.component';
import { ProgressStepDirective } from './progress-step.directive';
import { ClaimProgressComponent } from './claim-progress/claim-progress.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProgressHelperService } from './services/progress-steps-bar.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';








@NgModule({
  declarations: [
    AppComponent,
    FileclaimComponent,
    StartclaimComponent,
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,
    ClaimProgressComponent,
    CheckoutComponent,
    FooterComponent,
    NavBarComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatStepperModule,
    MatCheckboxModule,
  ],
  providers: [ProgressHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
