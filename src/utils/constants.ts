import { Column } from '@/types';

export const DEFAULT_COLUMNS: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [],
    color: '#3b82f6',
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    cards: [],
    color: '#f59e0b',
  },
  {
    id: 'done',
    title: 'Done',
    cards: [],
    color: '#10b981',
  },
];

export const PRIORITY_COLORS = {
  Low: '#10b981',
  Medium: '#f59e0b',
  High: '#ef4444',
};

export const PRIORITY_OPTIONS = ['Low', 'Medium', 'High'] as const;