import { Node, TableRow } from "./types";

export const flattenTree = (node: Node, level: number = 0, rows: TableRow[] = []): TableRow[] => {
  const indent = '  '.repeat(level);

  const row: TableRow = {
      name: `${indent}${node.value ? '- ' : '+ '}${node.name}`,
  };
  
  if (node.start) row.start = node.start.toISOString();
  if (node.end) row.end = node.end.toISOString();
  if (node.duration !== undefined) row.duration = node.duration;
  if (node.value !== undefined) row.value = node.value;

  rows.push(row);

  node.children.forEach(child => flattenTree(child, level + 1, rows));

  return rows;
}