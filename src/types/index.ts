export type Priority = 'Low' | 'Medium' | 'High';

export interface Card {
  id: string;
  title: string;
  description: string;
  priority: Priority | null;
}

export interface Column {
  id: string;
  title: string;
  cards: Card[];
  color: string;
}

export interface BoardState {
  columns: Column[];
}