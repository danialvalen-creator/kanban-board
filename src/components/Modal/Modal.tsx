import React, { useEffect } from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from './Modal.styles';
import { ModalProps } from './Modal.types';
import { Button } from '../common/Button/Button';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, onConfirm }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose onClick={onClose}>&times;</ModalClose>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {onConfirm && (
          <ModalFooter>
            <Button variant="default" onClick={onClose}>
              Отмена
            </Button>
            <Button variant="primary" onClick={onConfirm}>
              Подтвердить
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};