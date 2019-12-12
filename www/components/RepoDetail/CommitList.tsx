import React from "react";
import { humanizeGithubDate } from "../../utils/humanize";

const avatar = (avatarImg: string): React.ReactNode => {
  if (avatarImg) {
    return (
      <img
        className="w-6 h-6 rounded-full mr-1 object-fill"
        src={avatarImg}
        alt="user avatar"
      />
    );
  } else {
    return null;
  }
};

interface Commit {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    committer: {
      name: string;
      date: string;
    };
  };
  committer: {
    avatar_url: string;
  };
}
type CommitListProps = {
  commits: Array<Commit>;
};

const CommitList: React.FunctionComponent<CommitListProps> = ({ commits }) => {
  return (
    <>
      {commits.map((commit: Commit) => (
        <div key={commit.sha} className="hover:bg-gray-200">
          <div className="flex flex-col flex-shrink-0 px-4 py-2">
            <a
              href={commit.html_url}
              className="font-bold text-base text-blue-700 hover:underline"
            >
              {commit.commit.message}
            </a>
            <div className="flex">
              {avatar(commit?.committer?.avatar_url)}
              <div className="mr-4 text-gray-900 text-base">
                {commit.commit.committer.name}
              </div>
              <div className="text-gray-700 text-sm">
                {humanizeGithubDate(commit.commit.committer.date)} ago
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
