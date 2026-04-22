import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
  -webkit-appearance: none; /* Убирает стандартные стили iOS */
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &[type="color"] {
    height: 40px;
    padding: 4px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 16px; /* Предотвращает зум на iOS при фокусе */
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  -webkit-appearance: none;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 16px;
  }
`;