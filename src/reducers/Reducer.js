import { SET_DATA, SET_CURRENT_SLIDE } from '../actions/types';

const initialState = {
  data: [],
  currentSlide: 0
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
  case SET_DATA:
    return {
      ...state,
      data: action.payload
    }; 
  case SET_CURRENT_SLIDE:
    return {
      ...state,
      currentSlide: action.payload  
    };
  default:   
    return state;
  }
}