import { ACTION_TYPES } from "./Actions";

export const INITIAL_STATE = {
  earthquakes: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_EQ_DATAS:
      return {
        ...state,
        earthquakes: [...state.earthquakes, action.payload],
      };
  }
};
