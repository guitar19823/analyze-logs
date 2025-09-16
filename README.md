# analyze-logs

Builds a hierarchical tree from start/end log entries and flattens it into a table.

## Install

```bash
npm install analyze-logs
```

## Usage (API)

```ts
import { buildTree, flattenTree, parseDateTime, type LogEntry } from 'analyze-logs';

const logs: LogEntry[] = [
  { dateTime: '2024-01-01:12-00-00-000', name: 'taskA', value: 'start' },
  { dateTime: '2024-01-01:12-00-01-000', name: 'step1', value: 'work' },
  { dateTime: '2024-01-01:12-00-02-000', name: 'taskA', value: 'end' },
];

const tree = buildTree(logs);
const rows = flattenTree(tree);
console.table(rows);
```

## CLI

```bash
npx analyze-logs path/to/logs.json
```

If no path is provided, it looks for `logs.json` in the current directory.

## JSON format

```json
[
  { "dateTime": "YYYY-MM-DD:HH-mm-ss-SSS", "name": "task", "value": "start|end|other" }
]
```

- `start` opens a new nested node.
- `end` closes the most recent node with the same `name`.
- Other values become leaf events with zero duration.

## License

MIT

