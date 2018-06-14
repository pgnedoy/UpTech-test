import { SET_DATA, SET_CURRENT_SLIDE } from "./types";

export const setData = data => ({
  type: SET_DATA,
  payload: data.slider
})

export const setCurrentSlide = index => ({
  type: SET_CURRENT_SLIDE,
  payload: index
})