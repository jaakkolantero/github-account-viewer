import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { user, repo },
  } = req;

  console.log("repo", repo);
  console.log("user", user);

  // const commits = await fetch(
  //   `https://api.github.com/repos/${user}/${repo}/commits`
  // ).then(response => response.json());

  const commits = [
    {
      sha: "1160f677863cbc0057552e3707770274f183b833",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjExNjBmNjc3ODYzY2JjMDA1NzU1MmUzNzA3NzcwMjc0ZjE4M2I4MzM=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-24T20:50:16Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-24T20:50:16Z",
        },
        message: "fix(8.22): fix update problems when adding new book",
        tree: {
          sha: "190b57ae93dafd69ffe4b81913aca379839b1730",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/190b57ae93dafd69ffe4b81913aca379839b1730",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/1160f677863cbc0057552e3707770274f183b833",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/1160f677863cbc0057552e3707770274f183b833",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/1160f677863cbc0057552e3707770274f183b833",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/1160f677863cbc0057552e3707770274f183b833/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "ac07a8784f93026d319628bccc8b8853a682fc16",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/ac07a8784f93026d319628bccc8b8853a682fc16",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/ac07a8784f93026d319628bccc8b8853a682fc16",
        },
      ],
    },
    {
      sha: "ac07a8784f93026d319628bccc8b8853a682fc16",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmFjMDdhODc4NGY5MzAyNmQzMTk2MjhiY2NjOGI4ODUzYTY4MmZjMTY=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-24T20:30:47Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-24T20:30:47Z",
        },
        message:
          "feat(8.21 8.22): implement filter from graphql\n\nPoor decisions before made this implementation a hell -_-. Keep fetching at top level.",
        tree: {
          sha: "14207f21a71cfca485cefdbc34bcc7d6538d10bf",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/14207f21a71cfca485cefdbc34bcc7d6538d10bf",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/ac07a8784f93026d319628bccc8b8853a682fc16",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/ac07a8784f93026d319628bccc8b8853a682fc16",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/ac07a8784f93026d319628bccc8b8853a682fc16",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/ac07a8784f93026d319628bccc8b8853a682fc16/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "aaa38c08e7edd25fd41b5e6d4dfccef790227801",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/aaa38c08e7edd25fd41b5e6d4dfccef790227801",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/aaa38c08e7edd25fd41b5e6d4dfccef790227801",
        },
      ],
    },
    {
      sha: "aaa38c08e7edd25fd41b5e6d4dfccef790227801",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmFhYTM4YzA4ZTdlZGQyNWZkNDFiNWU2ZDRkZmNjZWY3OTAyMjc4MDE=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-22T11:06:08Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-22T11:06:08Z",
        },
        message: "feat(8.20): implement recommendations",
        tree: {
          sha: "db37e2d0674178b494b705a5266dda5ba14c4499",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/db37e2d0674178b494b705a5266dda5ba14c4499",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/aaa38c08e7edd25fd41b5e6d4dfccef790227801",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/aaa38c08e7edd25fd41b5e6d4dfccef790227801",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/aaa38c08e7edd25fd41b5e6d4dfccef790227801",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/aaa38c08e7edd25fd41b5e6d4dfccef790227801/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
        },
      ],
    },
    {
      sha: "11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjExZjc4ZDk4OTkxMmU3ZGQ5YTExZDlkZGVjYjMyY2E3YmIwYmMwNGI=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T20:43:16Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T20:43:16Z",
        },
        message: "feat(8.19): implement book filter feature",
        tree: {
          sha: "73577f87ada14d408e3be7e5d5d0383b6ad8fd6f",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/73577f87ada14d408e3be7e5d5d0383b6ad8fd6f",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/11f78d989912e7dd9a11d9ddecb32ca7bb0bc04b/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "9e80cff43e3be77887a490b7238c2190ab64a99d",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9e80cff43e3be77887a490b7238c2190ab64a99d",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/9e80cff43e3be77887a490b7238c2190ab64a99d",
        },
      ],
    },
    {
      sha: "9e80cff43e3be77887a490b7238c2190ab64a99d",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjllODBjZmY0M2UzYmU3Nzg4N2E0OTBiNzIzOGMyMTkwYWI2NGE5OWQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T19:29:46Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T19:29:46Z",
        },
        message: "feat(8.18): fix mutations and implement login/logout feature",
        tree: {
          sha: "64bb3968fa7c8ed1e526611441b9c5186ad27453",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/64bb3968fa7c8ed1e526611441b9c5186ad27453",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/9e80cff43e3be77887a490b7238c2190ab64a99d",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9e80cff43e3be77887a490b7238c2190ab64a99d",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/9e80cff43e3be77887a490b7238c2190ab64a99d",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9e80cff43e3be77887a490b7238c2190ab64a99d/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "752fad12bbe0cfc538d398152a2f5845bdbdbec2",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/752fad12bbe0cfc538d398152a2f5845bdbdbec2",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/752fad12bbe0cfc538d398152a2f5845bdbdbec2",
        },
      ],
    },
    {
      sha: "752fad12bbe0cfc538d398152a2f5845bdbdbec2",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4Ojc1MmZhZDEyYmJlMGNmYzUzOGQzOTgxNTJhMmY1ODQ1YmRiZGJlYzI=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T18:55:58Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T18:55:58Z",
        },
        message: "feat(8.17): fix books component and fetch correct data",
        tree: {
          sha: "d6890ff6c83c188066347da8b0f18994920fff3c",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/d6890ff6c83c188066347da8b0f18994920fff3c",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/752fad12bbe0cfc538d398152a2f5845bdbdbec2",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/752fad12bbe0cfc538d398152a2f5845bdbdbec2",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/752fad12bbe0cfc538d398152a2f5845bdbdbec2",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/752fad12bbe0cfc538d398152a2f5845bdbdbec2/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "6ebb5477b4df3d76ad8730f1e031f2246e733064",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/6ebb5477b4df3d76ad8730f1e031f2246e733064",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/6ebb5477b4df3d76ad8730f1e031f2246e733064",
        },
      ],
    },
    {
      sha: "6ebb5477b4df3d76ad8730f1e031f2246e733064",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjZlYmI1NDc3YjRkZjNkNzZhZDg3MzBmMWUwMzFmMjI0NmU3MzMwNjQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T18:55:10Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-21T18:55:10Z",
        },
        message: "fix: fix allbooks query",
        tree: {
          sha: "ea865e6a5c9864a0b2b5fd234f7511488aa9ceba",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/ea865e6a5c9864a0b2b5fd234f7511488aa9ceba",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/6ebb5477b4df3d76ad8730f1e031f2246e733064",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/6ebb5477b4df3d76ad8730f1e031f2246e733064",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/6ebb5477b4df3d76ad8730f1e031f2246e733064",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/6ebb5477b4df3d76ad8730f1e031f2246e733064/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
        },
      ],
    },
    {
      sha: "1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjFiZjk0ZjliMDJjOWQxZTc5YjAwZjYzMjM1NzU1ZDMzZGRiMTNhNmU=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-20T19:13:39Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-20T19:13:39Z",
        },
        message:
          "improvement(8.16): implement me query login mutation and edit addBook and editAuthor mutations",
        tree: {
          sha: "ee333562031e5edfa5ec19895672445205c2362b",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/ee333562031e5edfa5ec19895672445205c2362b",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/1bf94f9b02c9d1e79b00f63235755d33ddb13a6e",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/1bf94f9b02c9d1e79b00f63235755d33ddb13a6e/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "54653096084fcf11ebbd82b250b32b55523964bd",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/54653096084fcf11ebbd82b250b32b55523964bd",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/54653096084fcf11ebbd82b250b32b55523964bd",
        },
      ],
    },
    {
      sha: "54653096084fcf11ebbd82b250b32b55523964bd",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjU0NjUzMDk2MDg0ZmNmMTFlYmJkODJiMjUwYjMyYjU1NTIzOTY0YmQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-20T18:48:51Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-20T18:48:51Z",
        },
        message: "improvement(8.16): implement createUser mutation",
        tree: {
          sha: "9c0e3a7a904904a13069f24821ea1fbfd8247d97",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/9c0e3a7a904904a13069f24821ea1fbfd8247d97",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/54653096084fcf11ebbd82b250b32b55523964bd",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/54653096084fcf11ebbd82b250b32b55523964bd",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/54653096084fcf11ebbd82b250b32b55523964bd",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/54653096084fcf11ebbd82b250b32b55523964bd/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "8a94f0517d174c14b871627928dec244db3f5094",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/8a94f0517d174c14b871627928dec244db3f5094",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/8a94f0517d174c14b871627928dec244db3f5094",
        },
      ],
    },
    {
      sha: "8a94f0517d174c14b871627928dec244db3f5094",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjhhOTRmMDUxN2QxNzRjMTRiODcxNjI3OTI4ZGVjMjQ0ZGIzZjUwOTQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-19T20:32:45Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-19T20:32:45Z",
        },
        message: "feat(8.15): handle validation errors",
        tree: {
          sha: "f3a6ff5aa4597fa5ac7bb0031ce768b8acc9dda2",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/f3a6ff5aa4597fa5ac7bb0031ce768b8acc9dda2",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/8a94f0517d174c14b871627928dec244db3f5094",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/8a94f0517d174c14b871627928dec244db3f5094",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/8a94f0517d174c14b871627928dec244db3f5094",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/8a94f0517d174c14b871627928dec244db3f5094/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "9b465f78c67a1866edde62b541fa03df3b47ac0c",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9b465f78c67a1866edde62b541fa03df3b47ac0c",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/9b465f78c67a1866edde62b541fa03df3b47ac0c",
        },
      ],
    },
    {
      sha: "9b465f78c67a1866edde62b541fa03df3b47ac0c",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjliNDY1Zjc4YzY3YTE4NjZlZGRlNjJiNTQxZmEwM2RmM2I0N2FjMGM=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-19T20:21:03Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-19T20:21:03Z",
        },
        message: "feat(8.14): fix more resolvers to use database",
        tree: {
          sha: "a8dcf3a6bdae73c49c7e7c8016e08ef94778edc0",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/a8dcf3a6bdae73c49c7e7c8016e08ef94778edc0",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/9b465f78c67a1866edde62b541fa03df3b47ac0c",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9b465f78c67a1866edde62b541fa03df3b47ac0c",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/9b465f78c67a1866edde62b541fa03df3b47ac0c",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9b465f78c67a1866edde62b541fa03df3b47ac0c/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "bf3822ef110e6c8d78a67fab42773464ff10f9e0",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/bf3822ef110e6c8d78a67fab42773464ff10f9e0",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/bf3822ef110e6c8d78a67fab42773464ff10f9e0",
        },
      ],
    },
    {
      sha: "bf3822ef110e6c8d78a67fab42773464ff10f9e0",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmJmMzgyMmVmMTEwZTZjOGQ3OGE2N2ZhYjQyNzczNDY0ZmYxMGY5ZTA=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-19T18:56:26Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-19T18:56:26Z",
        },
        message: "feat(8.13): save library data to mongodb",
        tree: {
          sha: "2540aedd1738394e160f285d94a3ea3e91e6abcf",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/2540aedd1738394e160f285d94a3ea3e91e6abcf",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/bf3822ef110e6c8d78a67fab42773464ff10f9e0",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/bf3822ef110e6c8d78a67fab42773464ff10f9e0",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/bf3822ef110e6c8d78a67fab42773464ff10f9e0",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/bf3822ef110e6c8d78a67fab42773464ff10f9e0/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
        },
      ],
    },
    {
      sha: "9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjlhODBhNTNkNGQzMmRkMTRmNjA1Y2RhYmRiZWQ5OTQ0YjVlZjA1N2M=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-17T20:22:40Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-17T20:22:40Z",
        },
        message: "feat(8.12): use select tag in set birthyear name field",
        tree: {
          sha: "61ae0a7ed4f5d0dacca5a13c7caf05f22e5f4757",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/61ae0a7ed4f5d0dacca5a13c7caf05f22e5f4757",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/9a80a53d4d32dd14f605cdabdbed9944b5ef057c",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9a80a53d4d32dd14f605cdabdbed9944b5ef057c/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
        },
      ],
    },
    {
      sha: "8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjhhZDJlNTJiZThmOTNhNGI5OWVkNGFiZWE5ZGUwNWJmNDY0ZjY5NTg=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-17T19:49:21Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-17T19:49:21Z",
        },
        message: "feat(8.11): create set birthyear component",
        tree: {
          sha: "5efbe5399066943d82a63580721d4053872f9f84",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/5efbe5399066943d82a63580721d4053872f9f84",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/8ad2e52be8f93a4b99ed4abea9de05bf464f6958",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/8ad2e52be8f93a4b99ed4abea9de05bf464f6958/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "55698209280cc4fa67fc13a4fc61825bafc42f8f",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/55698209280cc4fa67fc13a4fc61825bafc42f8f",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/55698209280cc4fa67fc13a4fc61825bafc42f8f",
        },
      ],
    },
    {
      sha: "55698209280cc4fa67fc13a4fc61825bafc42f8f",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjU1Njk4MjA5MjgwY2M0ZmE2N2ZjMTNhNGZjNjE4MjViYWZjNDJmOGY=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-16T09:35:00Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-16T09:35:00Z",
        },
        message: "feat(8.10): implement adding book",
        tree: {
          sha: "b38e1c2270883ab6eb79308cbaa1e2b5bf0f54f1",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/b38e1c2270883ab6eb79308cbaa1e2b5bf0f54f1",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/55698209280cc4fa67fc13a4fc61825bafc42f8f",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/55698209280cc4fa67fc13a4fc61825bafc42f8f",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/55698209280cc4fa67fc13a4fc61825bafc42f8f",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/55698209280cc4fa67fc13a4fc61825bafc42f8f/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "aaa8bf6f3daf899bd59df28c559936760c2e734a",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/aaa8bf6f3daf899bd59df28c559936760c2e734a",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/aaa8bf6f3daf899bd59df28c559936760c2e734a",
        },
      ],
    },
    {
      sha: "aaa8bf6f3daf899bd59df28c559936760c2e734a",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmFhYThiZjZmM2RhZjg5OWJkNTlkZjI4YzU1OTkzNjc2MGMyZTczNGE=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T19:02:17Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T19:02:17Z",
        },
        message: "feat(8.9): implement books page",
        tree: {
          sha: "5d4adc6c376e6803eb8be25791da0cf02d1c3fc7",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/5d4adc6c376e6803eb8be25791da0cf02d1c3fc7",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/aaa8bf6f3daf899bd59df28c559936760c2e734a",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/aaa8bf6f3daf899bd59df28c559936760c2e734a",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/aaa8bf6f3daf899bd59df28c559936760c2e734a",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/aaa8bf6f3daf899bd59df28c559936760c2e734a/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "b5ec9feee41d09ce469b948d87b830059ccf29ed",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/b5ec9feee41d09ce469b948d87b830059ccf29ed",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/b5ec9feee41d09ce469b948d87b830059ccf29ed",
        },
      ],
    },
    {
      sha: "b5ec9feee41d09ce469b948d87b830059ccf29ed",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmI1ZWM5ZmVlZTQxZDA5Y2U0NjliOTQ4ZDg3YjgzMDA1OWNjZjI5ZWQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T18:37:31Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T18:37:31Z",
        },
        message: "feat(8.8): implement author page",
        tree: {
          sha: "047dd98289f248c7978923b0db0bb163f0bc4b69",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/047dd98289f248c7978923b0db0bb163f0bc4b69",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/b5ec9feee41d09ce469b948d87b830059ccf29ed",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/b5ec9feee41d09ce469b948d87b830059ccf29ed",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/b5ec9feee41d09ce469b948d87b830059ccf29ed",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/b5ec9feee41d09ce469b948d87b830059ccf29ed/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
        },
      ],
    },
    {
      sha: "22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjIyZjFmYjg1Y2I3YWIzODYyNTBkOWMxNWIxY2QyYTdhOTlmY2IzZTE=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T10:57:36Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T10:57:36Z",
        },
        message: "feat(8.7): add ediAuthor mutation",
        tree: {
          sha: "b22b8c89677831c40c6415a947dcdde833afdc81",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/b22b8c89677831c40c6415a947dcdde833afdc81",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/22f1fb85cb7ab386250d9c15b1cd2a7a99fcb3e1/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "cccdf857210c5eb9c687208d523a37b3c0132e76",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/cccdf857210c5eb9c687208d523a37b3c0132e76",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/cccdf857210c5eb9c687208d523a37b3c0132e76",
        },
      ],
    },
    {
      sha: "cccdf857210c5eb9c687208d523a37b3c0132e76",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmNjY2RmODU3MjEwYzVlYjljNjg3MjA4ZDUyM2EzN2IzYzAxMzJlNzY=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T09:34:55Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T09:34:55Z",
        },
        message: "feat(8.6): create addBook mutation",
        tree: {
          sha: "84a2ebed6052bd96d532b766cd88d859b7783263",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/84a2ebed6052bd96d532b766cd88d859b7783263",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/cccdf857210c5eb9c687208d523a37b3c0132e76",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/cccdf857210c5eb9c687208d523a37b3c0132e76",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/cccdf857210c5eb9c687208d523a37b3c0132e76",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/cccdf857210c5eb9c687208d523a37b3c0132e76/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
        },
      ],
    },
    {
      sha: "0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjA0MTJmNTYwM2NkZWNmZWNjOWIyYmE0YmZlYjQ3ZjUzMmEwODVkODE=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T08:14:49Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-15T08:14:49Z",
        },
        message: "feat(8.5): add genre filtering to allbooks query",
        tree: {
          sha: "68801067c1b1491e3f00c1374cd109565665309f",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/68801067c1b1491e3f00c1374cd109565665309f",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/0412f5603cdecfecc9b2ba4bfeb47f532a085d81",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/0412f5603cdecfecc9b2ba4bfeb47f532a085d81/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "94dea0185839c1716644f1cc897832382cdb231b",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/94dea0185839c1716644f1cc897832382cdb231b",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/94dea0185839c1716644f1cc897832382cdb231b",
        },
      ],
    },
    {
      sha: "94dea0185839c1716644f1cc897832382cdb231b",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4Ojk0ZGVhMDE4NTgzOWMxNzE2NjQ0ZjFjYzg5NzgzMjM4MmNkYjIzMWI=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-14T19:30:07Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-14T19:30:07Z",
        },
        message: "feat(8.4): add optional author filter to allBooks query",
        tree: {
          sha: "2babf0d57c00463e0c202350c141a070787469ec",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/2babf0d57c00463e0c202350c141a070787469ec",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/94dea0185839c1716644f1cc897832382cdb231b",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/94dea0185839c1716644f1cc897832382cdb231b",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/94dea0185839c1716644f1cc897832382cdb231b",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/94dea0185839c1716644f1cc897832382cdb231b/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "022fb6b117802065cb94487b7625ea9bfdaa1e92",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/022fb6b117802065cb94487b7625ea9bfdaa1e92",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/022fb6b117802065cb94487b7625ea9bfdaa1e92",
        },
      ],
    },
    {
      sha: "022fb6b117802065cb94487b7625ea9bfdaa1e92",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjAyMmZiNmIxMTc4MDIwNjVjYjk0NDg3Yjc2MjVlYTliZmRhYTFlOTI=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T20:16:57Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T20:16:57Z",
        },
        message: "feat(8.3): create all authors query",
        tree: {
          sha: "31b8b83d52e41cbbb0a42833f4c61c1ede8fe797",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/31b8b83d52e41cbbb0a42833f4c61c1ede8fe797",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/022fb6b117802065cb94487b7625ea9bfdaa1e92",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/022fb6b117802065cb94487b7625ea9bfdaa1e92",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/022fb6b117802065cb94487b7625ea9bfdaa1e92",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/022fb6b117802065cb94487b7625ea9bfdaa1e92/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
        },
      ],
    },
    {
      sha: "9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjlhYTQwN2NhMWJmZWRjOGE4ZGIxZWEyZjQ1YzhjMmY3ZWE3MTZlYTc=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T17:57:05Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T17:57:05Z",
        },
        message: "feat(8.1): create bookCount and authorCount queries",
        tree: {
          sha: "99b6aab99892aa76fb465a306a1da7bf66ddc49c",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/99b6aab99892aa76fb465a306a1da7bf66ddc49c",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/9aa407ca1bfedc8a8db1ea2f45c8c2f7ea716ea7/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "477df7dc4087e71db8ed174716f24a19511a1b1e",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/477df7dc4087e71db8ed174716f24a19511a1b1e",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/477df7dc4087e71db8ed174716f24a19511a1b1e",
        },
      ],
    },
    {
      sha: "477df7dc4087e71db8ed174716f24a19511a1b1e",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjQ3N2RmN2RjNDA4N2U3MWRiOGVkMTc0NzE2ZjI0YTE5NTExYTFiMWU=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T12:02:53Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T12:02:53Z",
        },
        message:
          "test(7.18): reset database before testing. create cypress test for adding blog",
        tree: {
          sha: "8b779285433af30e888b4ed620be65fcf957a394",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/8b779285433af30e888b4ed620be65fcf957a394",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/477df7dc4087e71db8ed174716f24a19511a1b1e",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/477df7dc4087e71db8ed174716f24a19511a1b1e",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/477df7dc4087e71db8ed174716f24a19511a1b1e",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/477df7dc4087e71db8ed174716f24a19511a1b1e/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
        },
      ],
    },
    {
      sha: "b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmIyNzM0YmM3ZTAwZTRhOTEyYjQzODJkNGYwOWJjZDVhYWI2ZTNmMDU=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T11:17:03Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T11:17:03Z",
        },
        message: "feat(7.17): install cypress and test login",
        tree: {
          sha: "30ea0022c103ab8089cd720887c1f74d78a55130",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/30ea0022c103ab8089cd720887c1f74d78a55130",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/b2734bc7e00e4a912b4382d4f09bcd5aab6e3f05/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "5bc354b3da386288be5768a8740416fc179e821d",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/5bc354b3da386288be5768a8740416fc179e821d",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/5bc354b3da386288be5768a8740416fc179e821d",
        },
      ],
    },
    {
      sha: "5bc354b3da386288be5768a8740416fc179e821d",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjViYzM1NGIzZGEzODYyODhiZTU3NjhhODc0MDQxNmZjMTc5ZTgyMWQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T10:27:35Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T10:27:35Z",
        },
        message: "feat(7.12): enable blog commenting",
        tree: {
          sha: "fa0a7cb3e23b560b6cfb1f2cc6ba51f26cc8e4de",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/fa0a7cb3e23b560b6cfb1f2cc6ba51f26cc8e4de",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/5bc354b3da386288be5768a8740416fc179e821d",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/5bc354b3da386288be5768a8740416fc179e821d",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/5bc354b3da386288be5768a8740416fc179e821d",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/5bc354b3da386288be5768a8740416fc179e821d/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "748db45566f9a33424430c2b36c0ee1468b8c48a",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/748db45566f9a33424430c2b36c0ee1468b8c48a",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/748db45566f9a33424430c2b36c0ee1468b8c48a",
        },
      ],
    },
    {
      sha: "748db45566f9a33424430c2b36c0ee1468b8c48a",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4Ojc0OGRiNDU1NjZmOWEzMzQyNDQzMGMyYjM2YzBlZTE0NjhiOGM0OGE=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T09:06:41Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-13T09:06:41Z",
        },
        message: "feat(7.11): read comments from backend",
        tree: {
          sha: "eca78a2f858a94b2c647461c2250a3400b43b144",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/eca78a2f858a94b2c647461c2250a3400b43b144",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/748db45566f9a33424430c2b36c0ee1468b8c48a",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/748db45566f9a33424430c2b36c0ee1468b8c48a",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/748db45566f9a33424430c2b36c0ee1468b8c48a",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/748db45566f9a33424430c2b36c0ee1468b8c48a/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "278ff65e2b76a736abfb63a617ccf077ccc68ef0",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/278ff65e2b76a736abfb63a617ccf077ccc68ef0",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/278ff65e2b76a736abfb63a617ccf077ccc68ef0",
        },
      ],
    },
    {
      sha: "278ff65e2b76a736abfb63a617ccf077ccc68ef0",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjI3OGZmNjVlMmI3NmE3MzZhYmZiNjNhNjE3Y2NmMDc3Y2NjNjhlZjA=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-12T19:51:41Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-12T19:51:41Z",
        },
        message: "feat(7.10): add navigation",
        tree: {
          sha: "fed1c54a7b53dbc76e00d8c8cf2e73d7dad306a7",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/fed1c54a7b53dbc76e00d8c8cf2e73d7dad306a7",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/278ff65e2b76a736abfb63a617ccf077ccc68ef0",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/278ff65e2b76a736abfb63a617ccf077ccc68ef0",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/278ff65e2b76a736abfb63a617ccf077ccc68ef0",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/278ff65e2b76a736abfb63a617ccf077ccc68ef0/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "f52670b2158c8a2b75a4f6af2919d0b028a7038b",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/f52670b2158c8a2b75a4f6af2919d0b028a7038b",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/f52670b2158c8a2b75a4f6af2919d0b028a7038b",
        },
      ],
    },
    {
      sha: "f52670b2158c8a2b75a4f6af2919d0b028a7038b",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OmY1MjY3MGIyMTU4YzhhMmI3NWE0ZjZhZjI5MTlkMGIwMjhhNzAzOGI=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-12T19:46:00Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-12T19:46:00Z",
        },
        message: "feat(7.9): add blog detail page",
        tree: {
          sha: "920cd9cd3517cbc9faf33cc55c3ba3676089a29f",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/920cd9cd3517cbc9faf33cc55c3ba3676089a29f",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/f52670b2158c8a2b75a4f6af2919d0b028a7038b",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/f52670b2158c8a2b75a4f6af2919d0b028a7038b",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/f52670b2158c8a2b75a4f6af2919d0b028a7038b",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/f52670b2158c8a2b75a4f6af2919d0b028a7038b/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "2c6b1716a3543009a01e8bc174fb44d875db0584",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/2c6b1716a3543009a01e8bc174fb44d875db0584",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/2c6b1716a3543009a01e8bc174fb44d875db0584",
        },
      ],
    },
    {
      sha: "2c6b1716a3543009a01e8bc174fb44d875db0584",
      node_id:
        "MDY6Q29tbWl0MjE2MjU1NTg4OjJjNmIxNzE2YTM1NDMwMDlhMDFlOGJjMTc0ZmI0NGQ4NzVkYjA1ODQ=",
      commit: {
        author: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-12T19:02:16Z",
        },
        committer: {
          name: "UFo_x",
          email: "tero.jaakkola1@gmail.com",
          date: "2019-11-12T19:02:16Z",
        },
        message: "feat(7.8): add users path",
        tree: {
          sha: "f135063f1f3e98d70d3318be46971a402b9905c6",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/git/trees/f135063f1f3e98d70d3318be46971a402b9905c6",
        },
        url:
          "https://api.github.com/repos/jaakkolantero/fullstackopen/git/commits/2c6b1716a3543009a01e8bc174fb44d875db0584",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/2c6b1716a3543009a01e8bc174fb44d875db0584",
      html_url:
        "https://github.com/jaakkolantero/fullstackopen/commit/2c6b1716a3543009a01e8bc174fb44d875db0584",
      comments_url:
        "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/2c6b1716a3543009a01e8bc174fb44d875db0584/comments",
      author: {
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
      committer: {
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
      parents: [
        {
          sha: "bc758a336cef201c8b06f2f09ecf5ea2f0bd0eea",
          url:
            "https://api.github.com/repos/jaakkolantero/fullstackopen/commits/bc758a336cef201c8b06f2f09ecf5ea2f0bd0eea",
          html_url:
            "https://github.com/jaakkolantero/fullstackopen/commit/bc758a336cef201c8b06f2f09ecf5ea2f0bd0eea",
        },
      ],
    },
  ];

  setTimeout(() => {
    return res.status(200).json(commits);
  }, 200);
};
