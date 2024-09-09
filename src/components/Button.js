import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-6 py-1 m-2 bg-slate-200 rounded-lg font-medium">{name}</button>
    </div>
  );
};

export default Button;
