import React from "react";
import { humanizeGithubDate } from "../../utils/humanize";

const avatar = (avatar_img: string) => {
  if (avatar_img) {
    return (
      <img
        className="w-6 h-6 rounded-full mr-1 object-fill"
        src={avatar_img}
        alt="user avatar"
      />
    );
  } else {
    return null;
  }
};

const CommitList = ({ commits }: any) => {
  return (
    <>
      {commits.map((commit: any) => (
        <div key={commit.sha} className="hover:bg-gray-200">
          <div className="flex flex-col flex-shrink-0 px-4 py-2">
            <a
              href={commit.html_url}
              className="font-bold text-base text-blue-700 hover:underline"
            >
              {commit.commit.message}
            </a>
            <div className="flex">
              {commit &&
                commit.committer &&
                commit.committer.avatar_url &&
                avatar(commit.committer.avatar_url)}

              <div className="mr-4 text-gray-900 text-base">
                {commit.commit.committer.name}
              </div>
              <div className="text-gray-700 text-sm">
                {humanizeGithubDate(commit.commit.author.date)} ago
              </div>
            </div>
          </div>
          <hr className="mx-4" />
        </div>
      ))}
    </>
  );
};

export default CommitList;
