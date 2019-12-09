import { formatDistanceToNow, parseISO } from "date-fns";

export const humanizeGithubDate = (date: string) => {
  return formatDistanceToNow(parseISO(date));
};
