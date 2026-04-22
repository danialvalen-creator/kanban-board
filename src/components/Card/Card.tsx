import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { CardContainer, CardHeader, CardTitle, CardDescription, CardPriority, CardActions, EditButton, DeleteButton, PriorityBadge } from './Card.styles';
import { CardProps } from './Card.types';
import { Modal } from '../Modal/Modal';
import { Input, TextArea } from '../common/Input/Input';
import { Button } from '../common/Button/Button';
import { PRIORITY_OPTIONS, PRIORITY_COLORS } from '@/utils/constants';
import { useAppDispatch } from '@/store/hooks';
import { updateCard, deleteCard } from '@/store/slices/boardSlice';

export const Card: React.FC<CardProps> = ({ card, columnId, index }) => {
  const dispatch = useAppDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(card.title);
  const [editedDescription, setEditedDescription] = useState(card.description);
  const [editedPriority, setEditedPriority] = useState(card.priority);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: card.id, columnId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleUpdate = () => {
    if (editedTitle.trim()) {
      dispatch(
        updateCard({
          columnId,
          cardId: card.id,
          updates: {
            title: editedTitle,
            description: editedDescription,
            priority: editedPriority,
          },
        })
      );
      setIsEditModalOpen(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      dispatch(deleteCard({ columnId, cardId: card.id }));
    }
  };

  return (
    <>
      <CardContainer ref={drag} $isDragging={isDragging}>
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
          <CardActions>
            <EditButton onClick={() => setIsEditModalOpen(true)}>✎</EditButton>
            <DeleteButton onClick={handleDelete}>×</DeleteButton>
          </CardActions>
        </CardHeader>
        {card.description && <CardDescription>{card.description}</CardDescription>}
        {card.priority && (
          <CardPriority>
            <PriorityBadge $color={PRIORITY_COLORS[card.priority]}>
              {card.priority}
            </PriorityBadge>
          </CardPriority>
        )}
      </CardContainer>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Редактировать задачу"
        onConfirm={handleUpdate}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Заголовок *
            </label>
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Введите заголовок"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Описание
            </label>
            <TextArea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Введите описание"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Приоритет
            </label>
            <select
              value={editedPriority || ''}
              onChange={(e) => setEditedPriority(e.target.value as any || null)}
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
    </>
  );
};