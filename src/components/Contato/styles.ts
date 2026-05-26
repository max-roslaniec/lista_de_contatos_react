import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Nome = styled.h3`
  font-size: 1.2rem;
  color: #2d3748;
  margin: 0;
`;

export const Detalhe = styled.p`
  font-size: 0.95rem;
  color: #718096;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputE = styled.input`
  padding: 8px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 0.95rem;
  width: 100%;
  max-width: 300px;
  
  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 16px;
`;

export const Botao = styled.button<{ $danger?: boolean; $success?: boolean }>`
  background-color: ${(props) => 
    props.$danger ? '#fc8181' : props.$success ? '#68d391' : '#4299e1'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => 
      props.$danger ? '#e53e3e' : props.$success ? '#38a169' : '#3182ce'};
  }
`;
