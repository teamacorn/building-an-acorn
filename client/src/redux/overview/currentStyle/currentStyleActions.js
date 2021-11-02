import { UPDATE_CURRENT_STYLE } from './currentStyleTypes'

export const updateCurrentStyle = (styleId) => {
  console.log(styleId)
  return {
    type: UPDATE_CURRENT_STYLE,
    payload: styleId
  }
}