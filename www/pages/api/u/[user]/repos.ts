import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user },
  } = req;

  const githubUserResponse = await fetch(
    `https://api.github.com/users/${user}/repos`
  );
  const githubUser = await githubUserResponse.json();

  if (githubUserResponse.status === 403) {
    res.status(403).json({ message: "API rate limit exceeded" });
  }

  res.status(200).json(githubUser);
};
