import { ACTION_TYPES } from "./Constants";

export const INITIAL_STATE = {
  earthquakes: [],
  loading: true,
  pulseRemoved: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_EQ_DATAS:
      return {
        ...state,
        earthquakes: [...state.earthquakes, action.payload],
      };
    case ACTION_TYPES.LOADING:
      return{
        ...state,
        loading: action.payload
      }
    case ACTION_TYPES.REMOVE_PULSE:
      return{
        ...state,
        pulseRemoved: action.payload,
      }
  } 
};
