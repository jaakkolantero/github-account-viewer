import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user, repo },
  } = req;

  console.log("repo", repo);
  console.log("user", user);

  // const githubUser = await fetch(
  //   `https://api.github.com/repos/${user}`
  // ).then(response => response.json());

  const dummy = {
    id: 216255588,
    node_id: "MDEwOlJlcG9zaXRvcnkyMTYyNTU1ODg=",
    name: "fullstackopen",
    full_name: "jaakkolantero/fullstackopen",
    private: false,
    owner: {
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
    },
    html_url: "https://github.com/jaakkolantero/fullstackopen",
    description: "https://fullstackopen.com/",
    fork: false,
    url: "https://api.github.com/repos/jaakkolantero/fullstackopen",
    forks_url: "https://api.github.com/repos/jaakkolantero/fullstackopen/forks",
    keys_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jaakkolantero/fullstackopen/teams",
    hooks_url: "https://api.github.com/repos/jaakkolantero/fullstackopen/hooks",
    issue_events_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/events",
    assignees_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/branches{/branch}",
    tags_url: "https://api.github.com/repos/jaakkolantero/fullstackopen/tags",
    blobs_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/languages",
    stargazers_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/stargazers",
    contributors_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/contributors",
    subscribers_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/subscribers",
    subscription_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/subscription",
    commits_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/merges",
    archive_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/downloads",
    issues_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/labels{/name}",
    releases_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/jaakkolantero/fullstackopen/deployments",
    created_at: "2019-10-19T18:54:12Z",
    updated_at: "2019-11-24T20:52:54Z",
    pushed_at: "2019-11-24T20:52:51Z",
    git_url: "git://github.com/jaakkolantero/fullstackopen.git",
    ssh_url: "git@github.com:jaakkolantero/fullstackopen.git",
    clone_url: "https://github.com/jaakkolantero/fullstackopen.git",
    svn_url: "https://github.com/jaakkolantero/fullstackopen",
    homepage: null,
    size: 1596,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    temp_clone_token: null,
    network_count: 0,
    subscribers_count: 1,
  };

  setTimeout(() => {
    return res.status(200).json(dummy);
  }, 200);
};
