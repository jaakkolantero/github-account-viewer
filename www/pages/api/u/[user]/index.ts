import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user },
  } = req;

  const url =
    process.env.CLIENT_ID && process.env.CLIENT_SECRET
      ? `https://api.github.com/users/${user}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      : `https://api.github.com/users/${user}`;

  const githubUserResponse = await fetch(url);
  const githubUser = await githubUserResponse.json();

  res.status(githubUserResponse.status).json(githubUser);
};
