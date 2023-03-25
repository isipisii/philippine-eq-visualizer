import { createContext, useReducer, useState, useEffect } from "react";
import { ACTION_TYPES } from "./Actions";
import { INITIAL_STATE, reducer } from "./Reducer";
import axios from "axios";
import { useMap } from "react-map-gl";

const GlobalContext = createContext();

const Context = ({ children }) => {
  const key = import.meta.env.VITE_MAP_KEY;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { map } = useMap();

  const getEarthquakes = async () => {
    try { 
      dispatch({ type: ACTION_TYPES.LOADING, payload: true });
      const response = await axios.get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=1&maxlatitude=20.97&minlatitude=3.86&maxlongitude=127.96&minlongitude=116.87`
      );
      dispatch({
        type: ACTION_TYPES.FETCH_EQ_DATAS,
        payload: response.data.features,
      });
      dispatch({ type: ACTION_TYPES.LOADING, payload: false });
    } catch (error) {
      console.error(error);
    }
  };

  const flyToHandler = (lat, longi) => {
    map.flyTo({
      center: [longi, lat],
      zoom: 7,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getEarthquakes,
        flyToHandler,
        key,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { Context, GlobalContext };
