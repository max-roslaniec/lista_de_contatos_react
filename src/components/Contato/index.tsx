import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { remover, editar } from '../../store/reducers/contatos';
import { Contato as ContatoClass } from '../../models/Contato';
import * as S from './styles';

type Props = ContatoClass;

const Contato = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [nomeEditado, setNomeEditado] = useState(nome);
  const [emailEditado, setEmailEditado] = useState(email);
  const [telefoneEditado, setTelefoneEditado] = useState(telefone);

  useEffect(() => {
    setNomeEditado(nome);
    setEmailEditado(email);
    setTelefoneEditado(telefone);
  }, [nome, email, telefone]);

  const cancelarEdicao = () => {
    setEstaEditando(false);
    setNomeEditado(nome);
    setEmailEditado(email);
    setTelefoneEditado(telefone);
  };

  const salvarEdicao = () => {
    if (nomeEditado.trim() === '' || emailEditado.trim() === '' || telefoneEditado.trim() === '') {
      alert('Preencha todos os campos');
      return;
    }
    
    dispatch(
      editar({
        id,
        nome: nomeEditado,
        email: emailEditado,
        telefone: telefoneEditado
      })
    );
    setEstaEditando(false);
  };

  return (
    <S.Card>
      <S.InfoContainer>
        {estaEditando ? (
          <>
            <S.InputE
              type="text"
              value={nomeEditado}
              onChange={(e) => setNomeEditado(e.target.value)}
              placeholder="Nome completo"
            />
            <S.InputE
              type="email"
              value={emailEditado}
              onChange={(e) => setEmailEditado(e.target.value)}
              placeholder="E-mail"
            />
            <S.InputE
              type="tel"
              value={telefoneEditado}
              onChange={(e) => setTelefoneEditado(e.target.value)}
              placeholder="Telefone"
            />
          </>
        ) : (
          <>
            <S.Nome>{nome}</S.Nome>
            <S.Detalhe>📧 {email}</S.Detalhe>
            <S.Detalhe>📞 {telefone}</S.Detalhe>
          </>
        )}
      </S.InfoContainer>
      
      <S.ActionsContainer>
        {estaEditando ? (
          <>
            <S.Botao $success onClick={salvarEdicao}>Salvar</S.Botao>
            <S.Botao $danger onClick={cancelarEdicao}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao $danger onClick={() => dispatch(remover(id))}>
              Remover
            </S.Botao>
          </>
        )}
      </S.ActionsContainer>
    </S.Card>
  );
};

export default Contato;
