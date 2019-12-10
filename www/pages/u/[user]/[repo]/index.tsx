import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { fetch } from "../../../../utils/fetch";
import CommitList from "../../../../components/RepoDetail/CommitList";

const RepoDetail = () => {
  const router = useRouter();
  const { user, repo } = router.query;
  const memoizedParams = useMemo(() => ({ user, repo }), [user, repo]);
  const { data: repoData, error: repoError } = useSWR(
    [`/api/u/${user}/${repo}`, memoizedParams],
    fetch
  );
  const { data: commits, error: commitsError } = useSWR(
    [`/api/u/${user}/${repo}/commits`, memoizedParams],
    fetch
  );

  if (commitsError) return <div>{commitsError.toString()}</div>;
  if (repoError) return <div>{repoError.toString()}</div>;
  if (!repoData || !commits) return <div>Loading...</div>;
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
        <CommitList commits={commits} />
      </div>
    </>
  );
};

RepoDetail.getInitialProps = async () => ({});

export default RepoDetail;
