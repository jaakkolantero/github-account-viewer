import React from "react";
import { humanizeGithubDate } from "../../utils/humanize";

const RepositoryList = ({ repos }: any) => {
  const sortedRepos = repos
    .sort((a: any, b: any) =>
      a.updated_at < b.updated_at ? -1 : a.updated_at > b.updated_at ? 1 : 0
    )
    .reverse();
  return (
    <div className="w-full py-4 flex flex-col">
      {sortedRepos.map((repo: any) => (
        <div key={repo.id} className="hover:bg-gray-200">
          <div className="flex flex-col flex-shrink-0 px-4 py-2">
            <a
              href={`/u/${repo.full_name}`}
              className="font-bold text-base text-blue-700 hover:underline"
            >
              {repo.name}
            </a>
            <div className="flex">
              <div className="text-gray-700 text-sm">
                updated {humanizeGithubDate(repo.updated_at)} ago
              </div>
            </div>
          </div>
          <hr className="mx-4" />
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
