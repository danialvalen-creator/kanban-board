import { BoardState } from '@/types';
import { DEFAULT_COLUMNS } from './constants';

const STORAGE_KEY = 'kanban-board';

export const loadState = (): BoardState => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return { columns: DEFAULT_COLUMNS };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return { columns: DEFAULT_COLUMNS };
  }
};

export const saveState = (state: BoardState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};