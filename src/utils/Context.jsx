import { createContext, useReducer } from "react";
import { ACTION_TYPES } from "./Actions";
import { INITIAL_STATE, reducer } from "./Reducer";
import axios from "axios";
import { useMap } from "react-map-gl";

const GlobalContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { map } = useMap();

  const getEarthquakes = async () => {
    try {
      const response = await axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-15&endtime=2023-03-22&minmagnitude=1&maxlatitude=20.97&minlatitude=3.86&maxlongitude=127.96&minlongitude=116.87");
      dispatch({ type: ACTION_TYPES.FETCH_EQ_DATAS, payload: response.data.features });
    } catch (error) {
      console.error(error);
    }
  };

  const flyToHandler = (lat, longi) => {
    map.flyTo({
      center: [longi, lat],
      zoom: 10,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getEarthquakes,
        flyToHandler
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { Context, GlobalContext };
