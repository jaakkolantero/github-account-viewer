import _fetch from "isomorphic-unfetch";

export const fetch = (url: RequestInfo) => _fetch(url).then(r => r.json());
