import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ElectionComponent } from './election/election.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CoreModule } from '../core/core.module';
import { TopicsComponent } from './topics/topics.component';
import { VoteComponent } from './vote/vote.component';
import {ProfileService} from './profile.service';
import {ElectionService} from '../shared/apicall/election.service';

@NgModule({
  declarations: [
    ProfileComponent,
    ElectionComponent,
    LeftbarComponent,
    UserdetailComponent,
    TopicsComponent,
    VoteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [ProfileService, ElectionService]
})
export class UserModule {

}
