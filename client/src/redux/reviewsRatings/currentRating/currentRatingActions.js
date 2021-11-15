import { UPDATE_CURRENT_RATING } from './currentRatingTypes'

export const updateCurrentRating = (currentRating) => {
  return {
    type: UPDATE_CURRENT_RATING,
    payload: currentRating
  }
}