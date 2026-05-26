import { useState } from 'react';
import type { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { adicionar } from '../../store/reducers/contatos';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #2d3748;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const BotaoAdicionar = styled.button`
  background-color: #48bb78;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #38a169;
  }
`;

const Formulario = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault();

    if (nome.trim() === '' || email.trim() === '' || telefone.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    }

    dispatch(
      adicionar({
        nome,
        email,
        telefone
      })
    );

    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <FormContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <BotaoAdicionar type="submit">Adicionar Contato</BotaoAdicionar>
      </Form>
    </FormContainer>
  );
};

export default Formulario;
