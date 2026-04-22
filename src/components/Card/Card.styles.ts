import styled from 'styled-components';

export const CardContainer = styled.div<{ $isDragging: boolean }>`
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: ${({ $isDragging }) =>
    $isDragging ? '0 10px 20px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.1)'};
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  cursor: grab;
  transition: all 0.2s;
  border-left: 4px solid #667eea;
  touch-action: none; /* Предотвращает скролл при перетаскивании на мобильных */
  -webkit-tap-highlight-color: transparent;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 14px;
    margin-bottom: 10px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  flex: 1;
  word-break: break-word; /* Перенос длинных слов на мобильных */

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CardDescription = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin: 8px 0;
  line-height: 1.4;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const CardPriority = styled.div`
  margin-top: 8px;
`;

export const PriorityBadge = styled.span<{ $color: string }>`
  display: inline-block;
  padding: 4px 8px;
  background: ${({ $color }) => $color};
  color: white;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 5px 10px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #f3f4f6;
  }

  &:active {
    transform: scale(0.92);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 6px;
  }
`;

export const EditButton = styled(IconButton)`
  color: #3b82f6;
`;

export const DeleteButton = styled(IconButton)`
  color: #ef4444;
`;