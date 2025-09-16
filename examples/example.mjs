import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { analize } from '../dist/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsPath = path.resolve(__dirname, './logs.json');
let logs;
try {
  const content = fs.readFileSync(logsPath, 'utf8');
  logs = JSON.parse(content);
} catch {
  logs = [
    { dateTime: '2024-01-01:12-00-00-000', name: 'taskA', value: 'start' },
    { dateTime: '2024-01-01:12-00-00-500', name: 'step1', value: 'work' },
    { dateTime: '2024-01-01:12-00-01-000', name: 'taskA', value: 'end' },
  ];
}

analize(logs);

