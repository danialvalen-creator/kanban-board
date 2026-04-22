import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
  padding: 16px; /* Отступы для мобильных */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    align-items: flex-end; /* Модальное окно снизу на мобильных */
    padding: 0;
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;
  -webkit-overflow-scrolling: touch;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    max-height: 85vh;
    animation: slideUpMobile 0.3s ease-out;
  }

  @keyframes slideUpMobile {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  color: #1f2937;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #f3f4f6;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 28px;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 16px;
    flex-direction: column-reverse; /* Кнопки в столбик на мобильных */
    
    button {
      width: 100%;
    }
  }
`;