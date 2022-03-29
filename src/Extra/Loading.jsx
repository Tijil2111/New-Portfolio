import React from "react";
import { SpinnerDotted } from "spinners-react";

export const Loading = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <SpinnerDotted size={100} thickness={100} speed={100} color="#5046E5" />
      </div>
    </div>
  );
};
