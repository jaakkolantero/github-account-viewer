import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user },
  } = req;

  // const githubUserResponse = await fetch(
  //   `https://api.github.com/users/${user}`
  // );
  // const githubUser = await githubUserResponse.json();
  const dummyData = {
    login: "jaakkolantero",
    id: 11708018,
    node_id: "MDQ6VXNlcjExNzA4MDE4",
    avatar_url: "https://avatars3.githubusercontent.com/u/11708018?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jaakkolantero",
    html_url: "https://github.com/jaakkolantero",
    followers_url: "https://api.github.com/users/jaakkolantero/followers",
    following_url:
      "https://api.github.com/users/jaakkolantero/following{/other_user}",
    gists_url: "https://api.github.com/users/jaakkolantero/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jaakkolantero/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/jaakkolantero/subscriptions",
    organizations_url: "https://api.github.com/users/jaakkolantero/orgs",
    repos_url: "https://api.github.com/users/jaakkolantero/repos",
    events_url: "https://api.github.com/users/jaakkolantero/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jaakkolantero/received_events",
    type: "User",
    site_admin: false,
    name: "Tero Jaakkola",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: true,
    bio: null,
    public_repos: 36,
    public_gists: 4,
    followers: 0,
    following: 1,
    created_at: "2015-03-29T16:24:23Z",
    updated_at: "2019-12-07T11:56:58Z",
  };

  setTimeout(() => {
    res.status(200).json(dummyData);
  }, 500);
};
