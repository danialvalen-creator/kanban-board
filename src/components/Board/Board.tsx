import React, { useState } from 'react';
import { BoardContainer, ColumnsContainer, AddColumnButton } from './Board.styles';
import { Column } from '../Column/Column';
import { Modal } from '../Modal/Modal';
import { Input } from '../common/Input/Input';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { addColumn } from '@/store/slices/boardSlice';

const Board: React.FC = () => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.board.columns);
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [newColumnColor, setNewColumnColor] = useState('#667eea');

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      dispatch(
        addColumn({
          title: newColumnTitle,
          color: newColumnColor,
        })
      );
      setNewColumnTitle('');
      setNewColumnColor('#667eea');
      setIsAddColumnModalOpen(false);
    }
  };

  return (
    <BoardContainer>
      <ColumnsContainer>
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
        <AddColumnButton onClick={() => setIsAddColumnModalOpen(true)}>
          + Добавить колонку
        </AddColumnButton>
      </ColumnsContainer>

      <Modal
        isOpen={isAddColumnModalOpen}
        onClose={() => setIsAddColumnModalOpen(false)}
        title="Добавить колонку"
        onConfirm={handleAddColumn}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Название колонки *
            </label>
            <Input
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              placeholder="Введите название колонки"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              Цвет колонки
            </label>
            <Input
              type="color"
              value={newColumnColor}
              onChange={(e) => setNewColumnColor(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </BoardContainer>
  );
};

export default Board;