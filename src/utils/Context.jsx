import { createContext, useReducer } from "react";
import { ACTION_TYPES } from "./Actions";
import { INITIAL_STATE, reducer } from "./Reducer";
import axios from "axios";
import { useMap } from "react-map-gl";

const GlobalContext = createContext();

const Context = ({ children }) => {
  const key = import.meta.env.VITE_MAP_KEY;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const lastArr = state.earthquakes.length - 1;
  const { map } = useMap();

  const getEarthquakes = async () => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING, payload: true });
      const response = await axios.get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=1&maxlatitude=20.97&minlatitude=3.86&maxlongitude=127.96&minlongitude=116.87`
      );
      const datas = response.data.features.map((f) => ({
        ...f,
        isActive: false,
      }));
      dispatch({
        type: ACTION_TYPES.FETCH_EQ_DATAS,
        payload: datas,
      });
      dispatch({ type: ACTION_TYPES.LOADING, payload: false });
    } catch (error) {
      console.error(error);
    }
  };

  // for focusing the earthquake details
  const handleOnFocus = (id) => {
    const updatedEarthquakes = state.earthquakes[lastArr]?.map((earthquake) => {
      return earthquake.id === id
        ? { ...earthquake, isActive: !earthquake?.isActive }
        : { ...earthquake, isActive: false };
    });
    dispatch({
      type: ACTION_TYPES.FETCH_EQ_DATAS,
      payload: updatedEarthquakes,
    });
  };

  //for flying into specific location when the marker or card is clicked
  const flyToHandler = (lat, longi) => {
    map.flyTo({
      center: [longi, lat],
      zoom: 7,
    });
  };

  // for parsing the magnitude
  const parsedMagnitude = (title) => {
    const magnitude = title.split("").slice(1, 5).join("");
    return parseFloat(magnitude);
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getEarthquakes,
        flyToHandler,
        key,
        parsedMagnitude,
        handleOnFocus,
        lastArr,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { Context, GlobalContext };
