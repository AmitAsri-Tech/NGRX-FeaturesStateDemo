import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from '../state/state';
import { Joke } from '../../models';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectJokeState: MemoizedSelector<object, State> = createFeatureSelector<State>('joke');

export const selectAllJokeEntities = createSelector(selectJokeState, state => state.entities);

export const selectAllJokeItems: MemoizedSelector<object, Joke[]> = createSelector(selectAllJokeEntities, entities => {
          return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const selectJokeById = (id: number) =>
  createSelector(selectAllJokeItems, (allJokes: Joke[]) => {
    if (allJokes) {
      return allJokes.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectJokeError: MemoizedSelector<object, any> = createSelector(selectJokeState, getError);

export const selectJokeIsLoading: MemoizedSelector<object, boolean> = createSelector(selectJokeState, getIsLoading);
