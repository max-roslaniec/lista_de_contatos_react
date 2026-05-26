import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Contato } from '../../models/Contato';

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      telefone: '11999999999'
    },
    {
      id: 2,
      nome: 'Maria Souza',
      email: 'maria.souza@example.com',
      telefone: '11888888888'
    }
  ]
};

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload);
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id);
      if (index >= 0) {
        state.itens[index] = action.payload;
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (c) => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
      );

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome');
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        };
        state.itens.push(novoContato);
      }
    }
  }
});

export const { remover, editar, adicionar } = contatosSlice.actions;
export default contatosSlice.reducer;
