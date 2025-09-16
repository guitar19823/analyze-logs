import { buildTree } from "./buildTree";
import { flattenTree } from "./flattenTree";
import { LogEntry } from "./types";

export const analize = (logs: LogEntry[]) => {
  console.table(flattenTree(buildTree(logs)));
}