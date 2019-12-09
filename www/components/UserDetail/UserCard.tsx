import React from "react";

interface UserCardProps {
  user: {
    name: string;
    html_url: string;
    login: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
  };
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex flex-col flex-shrink-0 justify-center w-full max-w-sm rounded-lg border overflow-hidden bg-white mt-12 mx-auto">
      <div className="flex flex-col justify-center items-center py-4 px-8">
        {user.avatar_url ? (
          <img
            className="w-24 h-24 rounded-full mr-4 object-fill"
            src={user.avatar_url}
            alt="user avatar"
          />
        ) : null}

        <div className="text-gray-900 font-bold text-xl">{user.name}</div>
        <a className="text-blue-700 text-sm" href={user.html_url}>
          @{user.login}
        </a>
      </div>
      <div className="flex justify-around items-center bg-gray-200 py-4">
        <div className="w-1/3 flex flex-col items-center justify-center border-r-2">
          <div className="text-3xl text-gray-900">{user.public_repos}</div>
          <div className="text-sm text-gray-600">repos</div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center border-r-2">
          <div className="text-3xl text-gray-900">{user.followers}</div>
          <div className="text-sm text-gray-600">followers</div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
          <div className="text-3xl text-gray-900">{user.following}</div>
          <div className="text-sm text-gray-600">following</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
