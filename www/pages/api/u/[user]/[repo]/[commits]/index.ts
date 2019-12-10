import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user, repo },
  } = req;

  const commitsResponse = await fetch(
    `https://api.github.com/repos/${user}/${repo}/commits`
  );
  const commits = await commitsResponse.json();

  const latestCommits = commits.slice(0, 10);

  res.status(commitsResponse.status).json(latestCommits);
};
