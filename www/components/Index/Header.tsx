import React from "react";

const Header = () => {
  return (
    <div>
      <div className="max-w-md text-3xl font-bold tracking-tighter">
        <mark className="bg-transparent text-gray-700">Github</mark> account
        viewer
      </div>
      <div className="ml-2 w-full max-w-md text-gray-700">
        Browse Github users in a{" "}
        <mark className="bg-transparent text-pink-500">pretty</mark> way.
      </div>
    </div>
  );
};

export default Header;
