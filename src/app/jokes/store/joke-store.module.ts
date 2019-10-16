import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JokeStoreEffects } from './effects/effects';
import { featureReducer } from './reducers/reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('joke', featureReducer),
    EffectsModule.forFeature([JokeStoreEffects])
  ],
  providers: [JokeStoreEffects]
})
export class JokeStoreModule {}
