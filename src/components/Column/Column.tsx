import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ColumnContainer, ColumnHeader, ColumnTitle, ColumnHeaderActions, ColumnCardCount, AddCardButton, DeleteColumnButton, CardsContainer, EditColumnButton } from './Column.styles';
import { ColumnProps } from './Column.types';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';
import { Input } from '../common/Input/Input';
import { Button } from '../common/Button/Button';
import { useAppDispatch } from '@/store/hooks';
import { addCard, moveCard, deleteColumn, updateColumn } from '@/store/slices/boardSlice';
import { v4 as uuidv4 } from 'uuid';
import { PRIORITY_OPTIONS } from '@/utils/constants';

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const dispatch = useAppDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDescription, setNewCardDescription] = useState('');
  const [newCardPriority, setNewCardPriority] = useState<any>(null);
  const [editedTitle, setEditedTitle] = useState(column.title);
  const [editedColor, setEditedColor] = useState(column.color);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: { id: string; columnId: string }) => {
      if (item.columnId !== column.id) {
        dispatch(moveCard({
          fromColumnId: item.columnId,
          toColumnId: column.id,
          cardId: item.id,
        }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      dispatch(
        addCard({
          columnId: column.id,
          card: {
            id: uuidv4(),
            title: newCardTitle,
            description: newCardDescription,
            priority: newCardPriority,
          },
        })
      );
      setNewCardTitle('');
      setNewCardDescription('');
      setNewCardPriority(null);
      setIsAddModalOpen(false);
    }
  };

  const handleUpdateColumn = () => {
    if (editedTitle.trim()) {
      dispatch(
        updateColumn({
          id: column.id,
          title: editedTitle,
          color: editedColor,
        })
      );
      setIsEditModalOpen(false);
    }
  };

  const handleDeleteColumn = () => {
    if (window.confirm(`Вы уверены, что хотите удалить колонку "${column.title}" и все задачи в ней?`)) {
      dispatch(deleteColumn(column.id));
    }
  };

  return (
    <>
      <ColumnContainer ref={drop} $isOver={isOver}>
        <ColumnHeader $color={column.color}>
          <ColumnTitle>{column.title}</ColumnTitle>
          <ColumnHeaderActions>
            <ColumnCardCount>{column.cards.length}</ColumnCardCount>
            <EditColumnButton onClick={() => setIsEditModalOpen(true)}>✎</EditColumnButton>
            <DeleteColumnButton onClick={handleDeleteColumn}>×</DeleteColumnButton>
          </ColumnHeaderActions>
        </ColumnHeader>
        <CardsContainer>
          {column.cards.map((card, index) => (
            <Card key={card.id} card={card} columnId={column.id} index={index} />
          ))}
          <AddCardButton onClick={() => setIsAddModalOpen(true)}>+ Добавить карточку</AddCardButton>
        </CardsContainer>
      </ColumnContainer>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Добавить задачу"
        onConfirm={handleAddCard}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Заголовок *
            </label>
            <Input
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              placeholder="Введите заголовок"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Описание
            </label>
            <Input
              value={newCardDescription}
              onChange={(e) => setNewCardDescription(e.target.value)}
              placeholder="Введите описание"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Приоритет
            </label>
            <select
              value={newCardPriority || ''}
              onChange={(e) => setNewCardPriority(e.target.value || null)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            >
              <option value="">Нет</option>
              {PRIORITY_OPTIONS.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Редактировать колонку"
        onConfirm={handleUpdateColumn}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Название колонки *
            </label>
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Введите название"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Цвет колонки
            </label>
            <Input
              type="color"
              value={editedColor}
              onChange={(e) => setEditedColor(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};