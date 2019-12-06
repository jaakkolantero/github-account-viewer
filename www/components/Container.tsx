import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col bg-gray-100 w-full h-screen">{children}</div>
  );
};

export default Container;
