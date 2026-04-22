import styled from 'styled-components';

export const BoardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Плавный скролл на iOS */
  
  /* Стилизация скроллбара для мобильных */
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    /* Позволяет контейнеру занимать всю ширину */
    width: 100%;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  min-height: calc(100vh - 120px);
  /* Важно для мобильных - позволяет горизонтальный скролл */
  padding-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 16px;
    min-height: calc(100vh - 80px);
  }
`;

export const AddColumnButton = styled.button`
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 12px;
  padding: 16px;
  width: 320px;
  min-width: 320px;
  height: fit-content;
  color: #4a5568;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s;
  /* Улучшение для тач-устройств */
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
    width: 280px;
    min-width: 280px;
    padding: 14px;
    font-size: 15px;
  }
`;