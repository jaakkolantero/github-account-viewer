import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user },
  } = req;

  // const githubUserResponse = await fetch(
  //   `https://api.github.com/users/${user}/repos`
  // );

  const dummy = [
    {
      id: 445617341,
      node_id: "MDEwOlJlcG9zaXRvcnk0NDYxNzM0MQ==",
      name: "arduinoHeater",
      full_name: "jaakkolantero/arduinoHeater",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/arduinoHeater",
      description: "Arduino controlled oil heater",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/arduinoHeater",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/arduinoHeater/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/arduinoHeater/deployments",
      created_at: "2015-10-20T15:51:00Z",
      updated_at: "2015-10-20T15:56:01Z",
      pushed_at: "2015-10-20T15:56:00Z",
      git_url: "git://github.com/jaakkolantero/arduinoHeater.git",
      ssh_url: "git@github.com:jaakkolantero/arduinoHeater.git",
      clone_url: "https://github.com/jaakkolantero/arduinoHeater.git",
      svn_url: "https://github.com/jaakkolantero/arduinoHeater",
      homepage: null,
      size: 108,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Arduino",
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
    },
    {
      id: 80436479,
      node_id: "MDEwOlJlcG9zaXRvcnk4MDQzNjQ3OQ==",
      name: "cheesesquare",
      full_name: "jaakkolantero/cheesesquare",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/cheesesquare",
      description: "Demos the new Android Design library.",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/cheesesquare",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/cheesesquare/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/cheesesquare/deployments",
      created_at: "2017-01-30T15:56:27Z",
      updated_at: "2017-01-30T15:56:30Z",
      pushed_at: "2017-01-24T11:16:10Z",
      git_url: "git://github.com/jaakkolantero/cheesesquare.git",
      ssh_url: "git@github.com:jaakkolantero/cheesesquare.git",
      clone_url: "https://github.com/jaakkolantero/cheesesquare.git",
      svn_url: "https://github.com/jaakkolantero/cheesesquare",
      homepage: "",
      size: 1274,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Java",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "apache-2.0",
        name: "Apache License 2.0",
        spdx_id: "Apache-2.0",
        url: "https://api.github.com/licenses/apache-2.0",
        node_id: "MDc6TGljZW5zZTI=",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 151969058,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTE5NjkwNTg=",
      name: "create-react-app",
      full_name: "jaakkolantero/create-react-app",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/create-react-app",
      description: "Create React apps with no build configuration.",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/create-react-app",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/create-react-app/deployments",
      created_at: "2018-10-07T17:50:31Z",
      updated_at: "2018-10-07T17:50:36Z",
      pushed_at: "2018-10-07T15:54:40Z",
      git_url: "git://github.com/jaakkolantero/create-react-app.git",
      ssh_url: "git@github.com:jaakkolantero/create-react-app.git",
      clone_url: "https://github.com/jaakkolantero/create-react-app.git",
      svn_url: "https://github.com/jaakkolantero/create-react-app",
      homepage: null,
      size: 7082,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 42662978,
      node_id: "MDEwOlJlcG9zaXRvcnk0MjY2Mjk3OA==",
      name: "EdisonGardens",
      full_name: "jaakkolantero/EdisonGardens",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/EdisonGardens",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/EdisonGardens",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/EdisonGardens/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/EdisonGardens/deployments",
      created_at: "2015-09-17T15:03:19Z",
      updated_at: "2015-09-17T15:04:00Z",
      pushed_at: "2015-09-17T16:39:46Z",
      git_url: "git://github.com/jaakkolantero/EdisonGardens.git",
      ssh_url: "git@github.com:jaakkolantero/EdisonGardens.git",
      clone_url: "https://github.com/jaakkolantero/EdisonGardens.git",
      svn_url: "https://github.com/jaakkolantero/EdisonGardens",
      homepage: null,
      size: 2584,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 42662015,
      node_id: "MDEwOlJlcG9zaXRvcnk0MjY2MjAxNQ==",
      name: "expressWorks",
      full_name: "jaakkolantero/expressWorks",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/expressWorks",
      description: "expressworks workshop",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/expressWorks",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/expressWorks/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/expressWorks/deployments",
      created_at: "2015-09-17T14:46:50Z",
      updated_at: "2015-09-17T15:01:07Z",
      pushed_at: "2015-09-17T14:47:20Z",
      git_url: "git://github.com/jaakkolantero/expressWorks.git",
      ssh_url: "git@github.com:jaakkolantero/expressWorks.git",
      clone_url: "https://github.com/jaakkolantero/expressWorks.git",
      svn_url: "https://github.com/jaakkolantero/expressWorks",
      homepage: "http://nodeschool.io/",
      size: 108,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 152981466,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTI5ODE0NjY=",
      name: "FizzBuzz",
      full_name: "jaakkolantero/FizzBuzz",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/FizzBuzz",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/FizzBuzz",
      forks_url: "https://api.github.com/repos/jaakkolantero/FizzBuzz/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/jaakkolantero/FizzBuzz/teams",
      hooks_url: "https://api.github.com/repos/jaakkolantero/FizzBuzz/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/issues/events{/number}",
      events_url: "https://api.github.com/repos/jaakkolantero/FizzBuzz/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/FizzBuzz/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/jaakkolantero/FizzBuzz/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/FizzBuzz/deployments",
      created_at: "2018-10-14T14:16:38Z",
      updated_at: "2018-10-14T14:22:09Z",
      pushed_at: "2018-10-14T14:22:08Z",
      git_url: "git://github.com/jaakkolantero/FizzBuzz.git",
      ssh_url: "git@github.com:jaakkolantero/FizzBuzz.git",
      clone_url: "https://github.com/jaakkolantero/FizzBuzz.git",
      svn_url: "https://github.com/jaakkolantero/FizzBuzz",
      homepage: null,
      size: 4,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Scala",
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
    },
    {
      id: 164141453,
      node_id: "MDEwOlJlcG9zaXRvcnkxNjQxNDE0NTM=",
      name: "fizzbuzz-backend",
      full_name: "jaakkolantero/fizzbuzz-backend",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/fizzbuzz-backend",
      description: "Simple fizzbuzz-game REST API",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/fizzbuzz-backend/deployments",
      created_at: "2019-01-04T18:26:29Z",
      updated_at: "2019-01-04T18:51:48Z",
      pushed_at: "2019-01-04T18:51:47Z",
      git_url: "git://github.com/jaakkolantero/fizzbuzz-backend.git",
      ssh_url: "git@github.com:jaakkolantero/fizzbuzz-backend.git",
      clone_url: "https://github.com/jaakkolantero/fizzbuzz-backend.git",
      svn_url: "https://github.com/jaakkolantero/fizzbuzz-backend",
      homepage: null,
      size: 9,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Scala",
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
    },
    {
      id: 144890103,
      node_id: "MDEwOlJlcG9zaXRvcnkxNDQ4OTAxMDM=",
      name: "friba",
      full_name: "jaakkolantero/friba",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/friba",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/friba",
      forks_url: "https://api.github.com/repos/jaakkolantero/friba/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/friba/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/friba/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/jaakkolantero/friba/teams",
      hooks_url: "https://api.github.com/repos/jaakkolantero/friba/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/friba/issues/events{/number}",
      events_url: "https://api.github.com/repos/jaakkolantero/friba/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/friba/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/friba/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/friba/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/friba/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/friba/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/friba/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/friba/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/friba/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/friba/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/friba/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/friba/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/friba/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/friba/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/friba/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/friba/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/friba/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/friba/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/friba/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/friba/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/jaakkolantero/friba/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/friba/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/friba/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/friba/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/friba/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/friba/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/friba/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/friba/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/friba/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/friba/deployments",
      created_at: "2018-08-15T18:37:59Z",
      updated_at: "2018-09-03T18:21:59Z",
      pushed_at: "2018-09-03T18:21:57Z",
      git_url: "git://github.com/jaakkolantero/friba.git",
      ssh_url: "git@github.com:jaakkolantero/friba.git",
      clone_url: "https://github.com/jaakkolantero/friba.git",
      svn_url: "https://github.com/jaakkolantero/friba",
      homepage: null,
      size: 251,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 151967960,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTE5Njc5NjA=",
      name: "friba-components",
      full_name: "jaakkolantero/friba-components",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/friba-components",
      description:
        "UI component library for Friba. Made with storybook, typescript, react-testing-library",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/friba-components",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/friba-components/deployments",
      created_at: "2018-10-07T17:38:12Z",
      updated_at: "2018-10-07T18:23:25Z",
      pushed_at: "2018-10-07T18:23:24Z",
      git_url: "git://github.com/jaakkolantero/friba-components.git",
      ssh_url: "git@github.com:jaakkolantero/friba-components.git",
      clone_url: "https://github.com/jaakkolantero/friba-components.git",
      svn_url: "https://github.com/jaakkolantero/friba-components",
      homepage: "",
      size: 209,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
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
    },
    {
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/fullstackopen",
      description: "https://fullstackopen.com/",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/fullstackopen",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/hooks",
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
    },
    {
      id: 216792450,
      node_id: "MDEwOlJlcG9zaXRvcnkyMTY3OTI0NTA=",
      name: "fullstackopen_project",
      full_name: "jaakkolantero/fullstackopen_project",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/fullstackopen_project",
      description: "Order and pick up food.",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/fullstackopen_project",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen_project/deployments",
      created_at: "2019-10-22T11:02:40Z",
      updated_at: "2019-12-02T20:23:33Z",
      pushed_at: "2019-12-03T01:13:26Z",
      git_url: "git://github.com/jaakkolantero/fullstackopen_project.git",
      ssh_url: "git@github.com:jaakkolantero/fullstackopen_project.git",
      clone_url: "https://github.com/jaakkolantero/fullstackopen_project.git",
      svn_url: "https://github.com/jaakkolantero/fullstackopen_project",
      homepage: null,
      size: 14336,
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
      open_issues_count: 1,
      license: null,
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 226066738,
      node_id: "MDEwOlJlcG9zaXRvcnkyMjYwNjY3Mzg=",
      name: "github-account-viewer",
      full_name: "jaakkolantero/github-account-viewer",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/github-account-viewer",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/github-account-viewer",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/github-account-viewer/deployments",
      created_at: "2019-12-05T09:39:15Z",
      updated_at: "2019-12-05T09:42:30Z",
      pushed_at: "2019-12-05T09:43:11Z",
      git_url: "git://github.com/jaakkolantero/github-account-viewer.git",
      ssh_url: "git@github.com:jaakkolantero/github-account-viewer.git",
      clone_url: "https://github.com/jaakkolantero/github-account-viewer.git",
      svn_url: "https://github.com/jaakkolantero/github-account-viewer",
      homepage: null,
      size: 357,
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
      open_issues_count: 1,
      license: null,
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 51695286,
      node_id: "MDEwOlJlcG9zaXRvcnk1MTY5NTI4Ng==",
      name: "grove-gray-oled-js-bbg",
      full_name: "jaakkolantero/grove-gray-oled-js-bbg",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/grove-gray-oled-js-bbg",
      description:
        "Beaglebone Nodejs library to drive a Grove 96 x 96 OLED display using SSD1327 Chipset",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/grove-gray-oled-js-bbg/deployments",
      created_at: "2016-02-14T13:16:10Z",
      updated_at: "2016-02-14T13:16:11Z",
      pushed_at: "2016-01-22T03:06:16Z",
      git_url: "git://github.com/jaakkolantero/grove-gray-oled-js-bbg.git",
      ssh_url: "git@github.com:jaakkolantero/grove-gray-oled-js-bbg.git",
      clone_url: "https://github.com/jaakkolantero/grove-gray-oled-js-bbg.git",
      svn_url: "https://github.com/jaakkolantero/grove-gray-oled-js-bbg",
      homepage: "",
      size: 551,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
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
    },
    {
      id: 153337803,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTMzMzc4MDM=",
      name: "hyper",
      full_name: "jaakkolantero/hyper",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/hyper",
      description: "A terminal built on web technologies",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/hyper",
      forks_url: "https://api.github.com/repos/jaakkolantero/hyper/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/hyper/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/hyper/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/jaakkolantero/hyper/teams",
      hooks_url: "https://api.github.com/repos/jaakkolantero/hyper/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/hyper/issues/events{/number}",
      events_url: "https://api.github.com/repos/jaakkolantero/hyper/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/hyper/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/hyper/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/hyper/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/hyper/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/hyper/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/hyper/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/hyper/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/hyper/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/hyper/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/hyper/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/hyper/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/hyper/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/hyper/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/hyper/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/hyper/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/hyper/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/hyper/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/hyper/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/hyper/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/jaakkolantero/hyper/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/hyper/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/hyper/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/hyper/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/hyper/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/hyper/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/hyper/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/hyper/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/hyper/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/hyper/deployments",
      created_at: "2018-10-16T18:53:35Z",
      updated_at: "2018-10-16T18:53:38Z",
      pushed_at: "2018-10-14T13:26:27Z",
      git_url: "git://github.com/jaakkolantero/hyper.git",
      ssh_url: "git@github.com:jaakkolantero/hyper.git",
      clone_url: "https://github.com/jaakkolantero/hyper.git",
      svn_url: "https://github.com/jaakkolantero/hyper",
      homepage: "https://hyper.is",
      size: 5789,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "canary",
    },
    {
      id: 154368091,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTQzNjgwOTE=",
      name: "hyper-overlay",
      full_name: "jaakkolantero/hyper-overlay",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/hyper-overlay",
      description:
        "A complete and customizable solution for a overlay window in your Hyper.app",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/hyper-overlay",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/hyper-overlay/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/hyper-overlay/deployments",
      created_at: "2018-10-23T17:18:03Z",
      updated_at: "2018-10-23T17:18:05Z",
      pushed_at: "2018-09-17T09:49:03Z",
      git_url: "git://github.com/jaakkolantero/hyper-overlay.git",
      ssh_url: "git@github.com:jaakkolantero/hyper-overlay.git",
      clone_url: "https://github.com/jaakkolantero/hyper-overlay.git",
      svn_url: "https://github.com/jaakkolantero/hyper-overlay",
      homepage: "",
      size: 14712,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 33477759,
      node_id: "MDEwOlJlcG9zaXRvcnkzMzQ3Nzc1OQ==",
      name: "javascripting",
      full_name: "jaakkolantero/javascripting",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/javascripting",
      description: "javascripting workshop",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/javascripting",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/javascripting/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/javascripting/deployments",
      created_at: "2015-04-06T10:54:19Z",
      updated_at: "2015-09-17T15:01:17Z",
      pushed_at: "2015-04-06T11:11:08Z",
      git_url: "git://github.com/jaakkolantero/javascripting.git",
      ssh_url: "git@github.com:jaakkolantero/javascripting.git",
      clone_url: "https://github.com/jaakkolantero/javascripting.git",
      svn_url: "https://github.com/jaakkolantero/javascripting",
      homepage: "http://nodeschool.io/",
      size: 120,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 117123734,
      node_id: "MDEwOlJlcG9zaXRvcnkxMTcxMjM3MzQ=",
      name: "kvaak-backend",
      full_name: "jaakkolantero/kvaak-backend",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/kvaak-backend",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/kvaak-backend",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/kvaak-backend/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-backend/deployments",
      created_at: "2018-01-11T16:24:14Z",
      updated_at: "2018-01-11T16:33:50Z",
      pushed_at: "2018-02-28T08:54:18Z",
      git_url: "git://github.com/jaakkolantero/kvaak-backend.git",
      ssh_url: "git@github.com:jaakkolantero/kvaak-backend.git",
      clone_url: "https://github.com/jaakkolantero/kvaak-backend.git",
      svn_url: "https://github.com/jaakkolantero/kvaak-backend",
      homepage: null,
      size: 27,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
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
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 117423437,
      node_id: "MDEwOlJlcG9zaXRvcnkxMTc0MjM0Mzc=",
      name: "kvaak-frontend",
      full_name: "jaakkolantero/kvaak-frontend",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/kvaak-frontend",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/kvaak-frontend",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/kvaak-frontend/deployments",
      created_at: "2018-01-14T11:14:37Z",
      updated_at: "2018-01-14T11:52:35Z",
      pushed_at: "2018-03-01T12:52:45Z",
      git_url: "git://github.com/jaakkolantero/kvaak-frontend.git",
      ssh_url: "git@github.com:jaakkolantero/kvaak-frontend.git",
      clone_url: "https://github.com/jaakkolantero/kvaak-frontend.git",
      svn_url: "https://github.com/jaakkolantero/kvaak-frontend",
      homepage: null,
      size: 411,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 42661692,
      node_id: "MDEwOlJlcG9zaXRvcnk0MjY2MTY5Mg==",
      name: "learnyounode",
      full_name: "jaakkolantero/learnyounode",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/learnyounode",
      description: "learnyounode workshop",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/learnyounode",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/learnyounode/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/learnyounode/deployments",
      created_at: "2015-09-17T14:41:13Z",
      updated_at: "2015-09-17T15:01:25Z",
      pushed_at: "2015-09-17T14:42:40Z",
      git_url: "git://github.com/jaakkolantero/learnyounode.git",
      ssh_url: "git@github.com:jaakkolantero/learnyounode.git",
      clone_url: "https://github.com/jaakkolantero/learnyounode.git",
      svn_url: "https://github.com/jaakkolantero/learnyounode",
      homepage: "http://nodeschool.io/",
      size: 108,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 96883494,
      node_id: "MDEwOlJlcG9zaXRvcnk5Njg4MzQ5NA==",
      name: "Magento-nginx-config",
      full_name: "jaakkolantero/Magento-nginx-config",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/Magento-nginx-config",
      description: "Default Nginx config for Magento ",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/Magento-nginx-config",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/Magento-nginx-config/deployments",
      created_at: "2017-07-11T10:56:00Z",
      updated_at: "2017-07-11T10:56:01Z",
      pushed_at: "2017-06-22T07:20:18Z",
      git_url: "git://github.com/jaakkolantero/Magento-nginx-config.git",
      ssh_url: "git@github.com:jaakkolantero/Magento-nginx-config.git",
      clone_url: "https://github.com/jaakkolantero/Magento-nginx-config.git",
      svn_url: "https://github.com/jaakkolantero/Magento-nginx-config",
      homepage: "https://www.magenx.com",
      size: 359,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Nginx",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "gpl-3.0",
        name: "GNU General Public License v3.0",
        spdx_id: "GPL-3.0",
        url: "https://api.github.com/licenses/gpl-3.0",
        node_id: "MDc6TGljZW5zZTk=",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 198879673,
      node_id: "MDEwOlJlcG9zaXRvcnkxOTg4Nzk2NzM=",
      name: "next-offline",
      full_name: "jaakkolantero/next-offline",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/next-offline",
      description:
        "make your Next.js application work offline using service workers via Google's workbox",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/next-offline",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/next-offline/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/next-offline/deployments",
      created_at: "2019-07-25T18:06:02Z",
      updated_at: "2019-07-25T18:06:05Z",
      pushed_at: "2019-07-24T18:36:19Z",
      git_url: "git://github.com/jaakkolantero/next-offline.git",
      ssh_url: "git@github.com:jaakkolantero/next-offline.git",
      clone_url: "https://github.com/jaakkolantero/next-offline.git",
      svn_url: "https://github.com/jaakkolantero/next-offline",
      homepage: "https://github.com/hanford/next-offline",
      size: 1029,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
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
    },
    {
      id: 156426528,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTY0MjY1Mjg=",
      name: "play-hello-world-docker",
      full_name: "jaakkolantero/play-hello-world-docker",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/play-hello-world-docker",
      description:
        "Hello world REST API example written in Scala using Play framework. Docker files included.",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/play-hello-world-docker",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/play-hello-world-docker/deployments",
      created_at: "2018-11-06T18:08:03Z",
      updated_at: "2018-11-06T18:54:03Z",
      pushed_at: "2018-11-06T18:54:01Z",
      git_url: "git://github.com/jaakkolantero/play-hello-world-docker.git",
      ssh_url: "git@github.com:jaakkolantero/play-hello-world-docker.git",
      clone_url: "https://github.com/jaakkolantero/play-hello-world-docker.git",
      svn_url: "https://github.com/jaakkolantero/play-hello-world-docker",
      homepage: null,
      size: 4,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Scala",
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
    },
    {
      id: 154998063,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTQ5OTgwNjM=",
      name: "play-scala-starter-example",
      full_name: "jaakkolantero/play-scala-starter-example",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/play-scala-starter-example",
      description: "Play Scala Starter Template (ideal for new users!)",
      fork: true,
      url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/play-scala-starter-example/deployments",
      created_at: "2018-10-27T18:46:10Z",
      updated_at: "2018-10-27T18:46:12Z",
      pushed_at: "2018-10-26T20:06:35Z",
      git_url: "git://github.com/jaakkolantero/play-scala-starter-example.git",
      ssh_url: "git@github.com:jaakkolantero/play-scala-starter-example.git",
      clone_url:
        "https://github.com/jaakkolantero/play-scala-starter-example.git",
      svn_url: "https://github.com/jaakkolantero/play-scala-starter-example",
      homepage: "https://playframework.com/documentation/latest/ScalaHome",
      size: 146,
      stargazers_count: 0,
      watchers_count: 0,
      language: "CSS",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "other",
        name: "Other",
        spdx_id: "NOASSERTION",
        url: null,
        node_id: "MDc6TGljZW5zZTA=",
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "2.6.x",
    },
    {
      id: 81857576,
      node_id: "MDEwOlJlcG9zaXRvcnk4MTg1NzU3Ng==",
      name: "RecycleViewSharedPreferencesExample",
      full_name: "jaakkolantero/RecycleViewSharedPreferencesExample",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url:
        "https://github.com/jaakkolantero/RecycleViewSharedPreferencesExample",
      description: null,
      fork: false,
      url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/RecycleViewSharedPreferencesExample/deployments",
      created_at: "2017-02-13T18:35:31Z",
      updated_at: "2018-01-11T16:14:08Z",
      pushed_at: "2017-02-13T18:44:51Z",
      git_url:
        "git://github.com/jaakkolantero/RecycleViewSharedPreferencesExample.git",
      ssh_url:
        "git@github.com:jaakkolantero/RecycleViewSharedPreferencesExample.git",
      clone_url:
        "https://github.com/jaakkolantero/RecycleViewSharedPreferencesExample.git",
      svn_url:
        "https://github.com/jaakkolantero/RecycleViewSharedPreferencesExample",
      homepage: "",
      size: 87,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Java",
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
    },
    {
      id: 121549428,
      node_id: "MDEwOlJlcG9zaXRvcnkxMjE1NDk0Mjg=",
      name: "redux-basics",
      full_name: "jaakkolantero/redux-basics",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/redux-basics",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/redux-basics",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/redux-basics/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/redux-basics/deployments",
      created_at: "2018-02-14T19:03:40Z",
      updated_at: "2018-02-14T19:04:53Z",
      pushed_at: "2018-02-14T19:06:38Z",
      git_url: "git://github.com/jaakkolantero/redux-basics.git",
      ssh_url: "git@github.com:jaakkolantero/redux-basics.git",
      clone_url: "https://github.com/jaakkolantero/redux-basics.git",
      svn_url: "https://github.com/jaakkolantero/redux-basics",
      homepage: null,
      size: 117,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
      default_branch: "radioRedux",
    },
    {
      id: 80193092,
      node_id: "MDEwOlJlcG9zaXRvcnk4MDE5MzA5Mg==",
      name: "SimpleDiscGolf",
      full_name: "jaakkolantero/SimpleDiscGolf",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/SimpleDiscGolf",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/SimpleDiscGolf/deployments",
      created_at: "2017-01-27T08:52:38Z",
      updated_at: "2017-01-27T08:53:50Z",
      pushed_at: "2017-04-05T15:35:52Z",
      git_url: "git://github.com/jaakkolantero/SimpleDiscGolf.git",
      ssh_url: "git@github.com:jaakkolantero/SimpleDiscGolf.git",
      clone_url: "https://github.com/jaakkolantero/SimpleDiscGolf.git",
      svn_url: "https://github.com/jaakkolantero/SimpleDiscGolf",
      homepage: null,
      size: 179,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Java",
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
    },
    {
      id: 80664106,
      node_id: "MDEwOlJlcG9zaXRvcnk4MDY2NDEwNg==",
      name: "StoreDataLocally",
      full_name: "jaakkolantero/StoreDataLocally",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/StoreDataLocally",
      description:
        "Sample app on the different ways to store data on an android device",
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/StoreDataLocally",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/StoreDataLocally/deployments",
      created_at: "2017-02-01T21:04:49Z",
      updated_at: "2017-02-01T21:04:51Z",
      pushed_at: "2016-09-21T08:36:00Z",
      git_url: "git://github.com/jaakkolantero/StoreDataLocally.git",
      ssh_url: "git@github.com:jaakkolantero/StoreDataLocally.git",
      clone_url: "https://github.com/jaakkolantero/StoreDataLocally.git",
      svn_url: "https://github.com/jaakkolantero/StoreDataLocally",
      homepage: null,
      size: 108,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Java",
      has_issues: false,
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
    },
    {
      id: 48284606,
      node_id: "MDEwOlJlcG9zaXRvcnk0ODI4NDYwNg==",
      name: "stream-adventure",
      full_name: "jaakkolantero/stream-adventure",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/stream-adventure",
      description: "stream-adventure workshop",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/stream-adventure",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/stream-adventure/deployments",
      created_at: "2015-12-19T14:19:53Z",
      updated_at: "2015-12-19T14:22:58Z",
      pushed_at: "2015-12-19T14:22:57Z",
      git_url: "git://github.com/jaakkolantero/stream-adventure.git",
      ssh_url: "git@github.com:jaakkolantero/stream-adventure.git",
      clone_url: "https://github.com/jaakkolantero/stream-adventure.git",
      svn_url: "https://github.com/jaakkolantero/stream-adventure",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
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
    },
    {
      id: 119252979,
      node_id: "MDEwOlJlcG9zaXRvcnkxMTkyNTI5Nzk=",
      name: "summer-2018",
      full_name: "jaakkolantero/summer-2018",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/summer-2018",
      description: null,
      fork: true,
      url: "https://api.github.com/repos/jaakkolantero/summer-2018",
      forks_url: "https://api.github.com/repos/jaakkolantero/summer-2018/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/jaakkolantero/summer-2018/teams",
      hooks_url: "https://api.github.com/repos/jaakkolantero/summer-2018/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/branches{/branch}",
      tags_url: "https://api.github.com/repos/jaakkolantero/summer-2018/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/summer-2018/deployments",
      created_at: "2018-01-28T11:40:12Z",
      updated_at: "2018-01-28T11:40:13Z",
      pushed_at: "2017-11-02T10:36:34Z",
      git_url: "git://github.com/jaakkolantero/summer-2018.git",
      ssh_url: "git@github.com:jaakkolantero/summer-2018.git",
      clone_url: "https://github.com/jaakkolantero/summer-2018.git",
      svn_url: "https://github.com/jaakkolantero/summer-2018",
      homepage: null,
      size: 1,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
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
    },
    {
      id: 194323491,
      node_id: "MDEwOlJlcG9zaXRvcnkxOTQzMjM0OTE=",
      name: "tailwind-nextjs-starter",
      full_name: "jaakkolantero/tailwind-nextjs-starter",
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
        events_url:
          "https://api.github.com/users/jaakkolantero/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jaakkolantero/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jaakkolantero/tailwind-nextjs-starter",
      description:
        "Serverless NextJS, TailwindCSS, PostCSS, tailwind.macro ready to go",
      fork: false,
      url: "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter",
      forks_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/forks",
      keys_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/teams",
      hooks_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/hooks",
      issue_events_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/events",
      assignees_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/tags",
      blobs_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/languages",
      stargazers_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/stargazers",
      contributors_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/contributors",
      subscribers_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/subscribers",
      subscription_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/subscription",
      commits_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/merges",
      archive_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/downloads",
      issues_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/labels{/name}",
      releases_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/jaakkolantero/tailwind-nextjs-starter/deployments",
      created_at: "2019-06-28T19:20:31Z",
      updated_at: "2019-06-28T19:28:26Z",
      pushed_at: "2019-11-02T18:50:46Z",
      git_url: "git://github.com/jaakkolantero/tailwind-nextjs-starter.git",
      ssh_url: "git@github.com:jaakkolantero/tailwind-nextjs-starter.git",
      clone_url: "https://github.com/jaakkolantero/tailwind-nextjs-starter.git",
      svn_url: "https://github.com/jaakkolantero/tailwind-nextjs-starter",
      homepage: null,
      size: 155,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master",
    },
  ];

  //const githubUser = await githubUserResponse.json();
  setTimeout(() => {
    res.status(200).json(dummy);
  }, 500);
};
