import { createContext, useReducer, useState, useEffect } from "react";
import { ACTION_TYPES } from "./Actions";
import { INITIAL_STATE, reducer } from "./Reducer";
import axios from "axios";
import LRUCache from "lru-cache";
import { useMap } from "react-map-gl";

const GlobalContext = createContext();

const Context = ({ children }) => {
  const key = import.meta.env.VITE_MAP_KEY;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [mapStyle, setMapStyle] = useState();
  const { map } = useMap();

  const getEarthquakes = async () => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING, payload: true });
      const response = await axios.get(
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-01&endtime=2023-03-24&minmagnitude=1&maxlatitude=20.97&minlatitude=3.86&maxlongitude=127.96&minlongitude=116.87"
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

  const cache = new LRUCache({
    max: 50,
    maxAge: 1000 * 60 * 60,
  });

  useEffect(() => {
    const cachedStyle = cache.get(key);

    if (cachedStyle) {
      setMapStyle(cachedStyle);
    } else {
      fetch(`https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/style.json?key=${key}`)
        .then((response) => response.json())
        .then((style) => {
          cache.set(key, style);
          setMapStyle(style);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [key]);

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
        mapStyle
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { Context, GlobalContext };
