import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #fef08a;
  margin-bottom: 24px;
`;

export const ResetButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  color: #667eea;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;