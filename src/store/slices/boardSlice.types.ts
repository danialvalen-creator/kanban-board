import { Column, Card } from '@/types';

export interface BoardSliceState {
  columns: Column[];
}

export interface AddColumnPayload {
  title: string;
  color: string;
}

export interface UpdateColumnPayload {
  id: string;
  title: string;
  color: string;
}

export interface AddCardPayload {
  columnId: string;
  card: Card;
}

export interface UpdateCardPayload {
  columnId: string;
  cardId: string;
  updates: Partial<Card>;
}

export interface MoveCardPayload {
  fromColumnId: string;
  toColumnId: string;
  cardId: string;
}