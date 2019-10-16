import { Routes } from '@angular/router';
import { JokesComponent } from './jokes/containers/jokes/jokes.component';
import { JokeDetailComponent } from './jokes/containers/joke-detail/joke-detail.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'jokes',
  pathMatch: 'full'
},
{
  path: 'jokes',
  component: JokesComponent
},
{
  path: 'jokes/:jokeId',
  component: JokeDetailComponent
}];
