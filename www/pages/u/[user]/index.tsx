import { useState, useMemo, memo, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetch } from "../../../utils/fetch";
import UserCard from "../../../components/UserDetail/UserCard";
import RepositoryList from "../../../components/UserDetail/RepositoryList";
import Search from "../../../components/Index/Search";

const UserDetail = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const { user } = router.query;
  const memoizedUser = useMemo(() => ({ user }), [user]);
  const { data: userData, error: userError } = useSWR(
    [`/api/u/${user}`, memoizedUser],
    fetch
  );
  const { data: repoData, error: repoError } = useSWR(
    [`/api/u/${user}/repos`, memoizedUser],
    fetch
  );

  useEffect(() => {
    console.log("userData", userData);
    console.log("repoData", repoData);
    console.log("userError", userError);
    console.log("repoError", repoError);
  }, [userData, repoData]);

  const searchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/u/${search}`);
  };

  const searchChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  if (userError || repoError) return <div>error!</div>;
  if (!userData || !repoData) return <div>Loading...</div>;
  if (userData.message) return <div>{userData.message}</div>;
  if (repoData.message) return <div>{repoData.message}</div>;

  return (
    <>
      <div className="bg-white w-full flex justify-center">
        <div className="max-w-md py-4">
          <div>
            <div className="max-w-md text-lg font-bold tracking-tighter">
              <mark className="bg-transparent text-gray-700">Github</mark>{" "}
              account viewer
            </div>
          </div>
          <Search
            onSearchSubmit={searchSubmitHandler}
            onSearchChange={searchChangeHandler}
            search={search}
          />
        </div>
      </div>
      <div className="max-w-lg">
        <UserCard user={userData} />
        <h2 className="mt-6 text-2xl font-black mx-4 capitalize">
          All repositories
        </h2>
        <hr className="mx-4" />
        <RepositoryList repos={repoData} />
      </div>
    </>
  );
};

UserDetail.getInitialProps = async () => ({});

export default UserDetail;
