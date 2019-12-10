import _fetch from "isomorphic-unfetch";

export const fetch = async (url: RequestInfo) => {
  const response = await _fetch(url);
  if (response.status > 299) {
    throw new Error(
      "uh oh, something went wrong. Probably API rate limit exceeded."
    );
  }
  return response.json();
};
