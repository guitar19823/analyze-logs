export interface LogEntry {
  dateTime: string;
  name: string;
  value: string;
}

export interface Node {
  name: string;
  start?: Date;
  end?: Date;
  duration?: number;
  children: Node[];
  value?: string;
}

export interface TableRow {
  name: string;
  start?: string;
  end?: string;
  duration?: number;
  value?: string;
}