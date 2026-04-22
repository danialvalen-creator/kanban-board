import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardSliceState, AddColumnPayload, UpdateColumnPayload, AddCardPayload, UpdateCardPayload, MoveCardPayload } from './boardSlice.types';
import { loadState, saveState } from '@/utils/localStorage';
import { v4 as uuidv4 } from 'uuid';

const initialState: BoardSliceState = loadState();

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<AddColumnPayload>) => {
      const newColumn = {
        id: uuidv4(),
        title: action.payload.title,
        cards: [],
        color: action.payload.color,
      };
      state.columns.push(newColumn);
      saveState({ columns: state.columns });
    },
    
    updateColumn: (state, action: PayloadAction<UpdateColumnPayload>) => {
      const column = state.columns.find(col => col.id === action.payload.id);
      if (column) {
        column.title = action.payload.title;
        column.color = action.payload.color;
        saveState({ columns: state.columns });
      }
    },
    
    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter(col => col.id !== action.payload);
      saveState({ columns: state.columns });
    },
    
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        column.cards.push(action.payload.card);
        saveState({ columns: state.columns });
      }
    },
    
    updateCard: (state, action: PayloadAction<UpdateCardPayload>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        const card = column.cards.find(c => c.id === action.payload.cardId);
        if (card) {
          Object.assign(card, action.payload.updates);
          saveState({ columns: state.columns });
        }
      }
    },
    
    deleteCard: (state, action: PayloadAction<{ columnId: string; cardId: string }>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        column.cards = column.cards.filter(card => card.id !== action.payload.cardId);
        saveState({ columns: state.columns });
      }
    },
    
    moveCard: (state, action: PayloadAction<MoveCardPayload>) => {
      const { fromColumnId, toColumnId, cardId } = action.payload;
      
      const fromColumn = state.columns.find(col => col.id === fromColumnId);
      const toColumn = state.columns.find(col => col.id === toColumnId);
      
      if (fromColumn && toColumn) {
        const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);
        if (cardIndex !== -1) {
          const [movedCard] = fromColumn.cards.splice(cardIndex, 1);
          toColumn.cards.push(movedCard);
          saveState({ columns: state.columns });
        }
      }
    },
    
    reorderCards: (state, action: PayloadAction<{ columnId: string; cards: Card[] }>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        column.cards = action.payload.cards;
        saveState({ columns: state.columns });
      }
    },
  },
});

export const {
  addColumn,
  updateColumn,
  deleteColumn,
  addCard,
  updateCard,
  deleteCard,
  moveCard,
  reorderCards,
} = boardSlice.actions;

export default boardSlice.reducer;