import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { fetch } from "../../../../utils/fetch";
import { humanizeGithubDate } from "../../../../utils/humanize";

const RepoDetail = () => {
  const router = useRouter();
  const { user, repo } = router.query;
  const { data: repoData, error: repoError } = useSWR(
    () => `/api/u/${user}/${repo}`,
    fetch
  );
  const { data: commits, error: commitsError } = useSWR(
    () => `/api/u/${user}/${repo}/commits`,
    fetch
  );

  useEffect(() => {
    console.log("useEffect");
    console.log("repoData", repoData);
    console.log("repoError", repoError);
    console.log("commits", commits);
  }, [repoData, repoError, commits]);
  if (!repoData || !commits) return <div>Loading...</div>;
  if (!repoData.id) return <div>Repository not found</div>;
  if (!commits[0].sha) return <div>No commits</div>;
  return (
    <>
      <div className="max-w-lg mt-3">
        <Link href={`/u/${user}`}>
          <a className="py-2 px-4 font-black text-blue-700 hover:underline ml-3">
            back
          </a>
        </Link>
        <div className="flex justify-between align-baseline mt-6">
          <h2 className="text-2xl font-black mx-4 capitalize">
            Latest commits
          </h2>
          <div className="text-sm text-gray-700">
            {user}/{repo}
          </div>
        </div>
        <hr className="mx-4 mb-6" />
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
                <img
                  className="w-6 h-6 rounded-full mr-1 object-fill"
                  src="https://avatars0.githubusercontent.com/u/11708018?s=460&v=4"
                  alt="user avatar"
                />
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
      </div>
    </>
  );
};

RepoDetail.getInitialProps = async () => ({});

export default RepoDetail;
