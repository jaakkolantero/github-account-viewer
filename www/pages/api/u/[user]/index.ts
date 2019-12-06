import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

const sampleUserData = [{ data: "data" }, { data: "data2" }];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user },
  } = req;

  const githubUser = await fetch(
    `https://api.github.com/users/${user}`
  ).then(response => response.json());
  res.status(200).json(githubUser);
};
