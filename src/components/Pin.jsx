import React from "react";

const Pin = () =>  (
    <span className="relative flex h-10 w-10 items-center justify-center">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eaeaeaf7] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#eeebebf7] opacity-75"></span>
    </span>
  );

export default Pin;
