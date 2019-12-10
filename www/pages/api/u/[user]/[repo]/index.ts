import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user, repo },
  } = req;

  const githubUserResponse = await fetch(
    `https://api.github.com/repos/${user}/${repo}`
  );
  const githubUser = await githubUserResponse.json();

  res.status(githubUserResponse.status).json(githubUser);
};
