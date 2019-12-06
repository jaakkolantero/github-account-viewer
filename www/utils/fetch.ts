import _fetch from "isomorphic-unfetch";

export const fetcher = (url: RequestInfo) => _fetch(url).then(r => r.json());
