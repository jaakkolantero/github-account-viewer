import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex flex-1 justify-center items-center">{children}</div>
  );
};

export default Content;
