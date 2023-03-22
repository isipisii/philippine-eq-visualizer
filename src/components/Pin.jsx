import React from "react";

const Pin = () =>  (
    <span className="relative flex h-12 w-12 items-center justify-center">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd2222f7] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#fd2222f7] opacity-75"></span>
    </span>
  );

export default Pin;
