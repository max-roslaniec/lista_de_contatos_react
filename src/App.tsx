import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyle, Container } from './styles/GlobalStyles';
import Formulario from './containers/Formulario';
import ListaDeContatos from './containers/ListaDeContatos';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Formulario />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;
