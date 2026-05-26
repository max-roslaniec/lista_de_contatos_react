import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Contato from '../../components/Contato';
import styled from 'styled-components';

const ListaContainer = styled.div`
  margin-top: 32px;
`;

const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #2d3748;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`;

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootState) => state.contatos);

  return (
    <ListaContainer>
      <Titulo>Meus Contatos</Titulo>
      <ul>
        {itens.map((contato) => (
          <li key={contato.id} style={{ listStyle: 'none' }}>
            <Contato
              id={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </ListaContainer>
  );
};

export default ListaDeContatos;
