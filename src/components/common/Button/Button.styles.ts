import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background: #667eea;
          color: white;
          &:hover {
            background: #5a67d8;
          }
        `;
      case 'secondary':
        return `
          background: #48bb78;
          color: white;
          &:hover {
            background: #38a169;
          }
        `;
      case 'danger':
        return `
          background: #f56565;
          color: white;
          &:hover {
            background: #e53e3e;
          }
        `;
      default:
        return `
          background: #e2e8f0;
          color: #4a5568;
          &:hover {
            background: #cbd5e0;
          }
        `;
    }
  }}
  
  &:active {
    transform: scale(0.97);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:active {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 15px;
  }
`;