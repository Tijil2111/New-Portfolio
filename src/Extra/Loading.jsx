import React from "react";
import { Bars } from "react-loading-icons";

export const Loading = () => {
  return (
    <div className="flex h-screen dark:bg-slate-900">
      <div className="m-auto">
        <Bars
          fill="#5046E5"
          strokeOpacity={0.125}
          speed={0.75}
          className="text-indigo-600"
        />
      </div>
    </div>
  );
};
