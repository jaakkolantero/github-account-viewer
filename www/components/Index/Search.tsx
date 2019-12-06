import React from "react";

interface SearchProps {
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onSearchChange: React.FormEventHandler<HTMLInputElement>;
  search: string;
}

const Search = ({ onSearchSubmit, onSearchChange, search }: SearchProps) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit} className="w-full max-w-md mt-6">
        <div className="flex items-center bg-gray-200 rounded-lg overflow-hidden">
          <input
            value={search}
            onChange={onSearchChange}
            placeholder="username"
            type="text"
            name="username"
            className="appearance-none bg-transparent border-transparent w-full text-gray-700 placeholder-gray-500 mr-2 py-2 px-4 leading-tight focus:outline-none"
          ></input>
          <button
            type={"submit"}
            className="flex-shrink-0 bg-transparent hover:text-gray-500 text-gray-700 py-2 px-2 focus:outline-none border-transparent focus:bg-gray-300"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
