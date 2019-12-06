import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetch";

const UserDetail = () => {
  const router = useRouter();
  const { user } = router.query;
  const { data, error } = useSWR(`/api/u/${user}`, fetcher);

  useEffect(() => {
    data && console.log("data", data);
    error && console.log("error", error);
  }, [data, error]);

  return <div>{user}</div>;
};

export default UserDetail;
