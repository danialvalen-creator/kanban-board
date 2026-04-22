import styled from 'styled-components';

export const ColumnContainer = styled.div<{ $isOver: boolean }>`
  background: #f7fafc;
  border-radius: 12px;
  width: 320px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  transition: all 0.2s;
  box-shadow: ${({ $isOver }) =>
    $isOver ? '0 0 0 2px #667eea, 0 4px 6px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.1)'};
  -webkit-overflow-scrolling: touch; /* Плавный скролл на iOS */
  
  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: 280px;
    min-width: 280px;
    max-height: calc(100vh - 100px);
  }
`;

export const ColumnHeader = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  padding: 16px;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const ColumnTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ColumnHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ColumnCardCount = styled.span`
  background: rgba(255, 255, 255, 0.3);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

export const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: background 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &:active {
    transform: scale(0.92);
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`;

export const EditColumnButton = styled(IconButton)``;

export const DeleteColumnButton = styled(IconButton)``;

export const CardsContainer = styled.div`
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  min-height: 200px;
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const AddCardButton = styled.button`
  width: 100%;
  padding: 12px;
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  color: #4a5568;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  margin-top: 8px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #edf2f7;
    border-color: #667eea;
    color: #667eea;
  }
  
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 14px;
  }
`;