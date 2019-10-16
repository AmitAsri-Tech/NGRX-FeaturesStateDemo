import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { JokeRootModule } from './jokes/joke-root.module';
import { JokesComponent } from './jokes/containers/jokes/jokes.component';
import { JokeDetailComponent } from './jokes/containers/joke-detail/joke-detail.component';
import { JokeCardListComponent } from './jokes/components/joke-card-list/joke-card-list.component';
import { JokeCardItemComponent } from './jokes/components/joke-card-item/joke-card-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    JokeRootModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    JokesComponent,
    JokeDetailComponent,
    JokeCardListComponent,
    JokeCardItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
