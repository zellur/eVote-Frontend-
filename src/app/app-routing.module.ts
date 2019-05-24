import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdetailComponent } from './profile/userdetail/userdetail.component';
import {ElectionComponent} from './profile/election/election.component';
import {TopicsComponent} from './profile/topics/topics.component';
import {VoteComponent} from './profile/vote/vote.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'profile', component: ProfileComponent, children: [
      {path: '', component: UserdetailComponent},
      {path: 'election', component: ElectionComponent},
      {path: 'topics', component: TopicsComponent},
      {path: 'votepanel', component: VoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
