import { ACTION_TYPES } from "./Actions";

export const INITIAL_STATE = {
  earthquakes: [],
  loading: false
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
  }
};
