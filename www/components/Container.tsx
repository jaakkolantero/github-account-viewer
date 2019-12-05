import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-100 w-full h-screen">{children}</div>
  );
};

export default Container;
