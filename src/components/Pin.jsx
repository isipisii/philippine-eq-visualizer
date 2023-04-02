import { useContext } from "react";
import { GlobalContext } from "../utils/Context";

const Pin = () => {
  const { pulseRemoved } = useContext(GlobalContext)
  
  return (
    <span className="relative flex h-8 w-8 items-center justify-center">
      {pulseRemoved &&  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eaeaeaf7] opacity-75"></span>}
      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#eeebebac] opacity-75"></span>
    </span>
  );
};
export default Pin;
