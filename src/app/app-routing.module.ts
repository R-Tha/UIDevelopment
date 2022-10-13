import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClaimProgressComponent } from './claim-progress/claim-progress.component';
import { FileclaimComponent } from './fileclaim/fileclaim.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartclaimComponent } from './startclaim/startclaim.component';


const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:NavBarComponent},
  {path:'fileclaim',component:FileclaimComponent},
  {path:'startclaim',component:StartclaimComponent},
  {path:'claimprogress',component:ClaimProgressComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
