import { buildTree } from "./buildTree";
import { flattenTree } from "./flattenTree";
import { LogEntry } from "./types";

export const analize = (logs: LogEntry[]) => {
  const result = flattenTree(buildTree(logs));

  console.table(result);

  return result;
}