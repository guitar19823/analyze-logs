import { parseDateTime } from "./parseDateTime";
import { LogEntry, Node } from "./types";

export const buildTree = (logs: LogEntry[]): Node => {
  const root: Node = { name: "root", children: [] };
  const stack: Node[] = [root];

  logs.forEach((log) => {
    const time = parseDateTime(log.dateTime);
    const name = log.name;
    const value = log.value;

    if (value === "start") {
      const node: Node = { name, start: time, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else if (value === "end" || value === "error") {
      if (stack.length > 0 && stack[stack.length - 1].name === name) {
        const node = stack.pop()!;
        node.end = time;
        node.duration = (time.getTime() - (node.start?.getTime() ?? 0)) / 1000;
      } else {
        console.warn(`Mismatch in end for ${name}`);
      }
    } else {
      const node: Node = {
        name,
        value,
        start: time,
        end: time,
        duration: 0,
        children: [],
      };

      stack[stack.length - 1].children.push(node);
    }
  });

  return root;
};
