import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 w-full min-h-screen">
      {children}
    </div>
  );
};

export default Container;
