import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as featureActions from '../actions/actions';

@Injectable()
export class JokeStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) { }

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService
        .getJokes()
        .pipe(
          map(
            items =>
              new featureActions.LoadSuccessAction({
                items
              })
          ),
          catchError(error =>
            observableOf(new featureActions.LoadFailureAction({ error }))
          )
        )
    )
  );
}
