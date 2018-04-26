import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashMainPage } from './dash-main';

@NgModule({
  declarations: [
    DashMainPage,
  ],
  imports: [
    IonicPageModule.forChild(DashMainPage),
  ],
})
export class DashMainPageModule {}
