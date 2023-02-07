import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando a Pagina Wallet', () => {
  it('Os itens estão na tela', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText(/Email/i);
    userEvent.type((email), 'trybe@trybe.com');
    const senha = screen.getByPlaceholderText(/Senha/i);
    userEvent.type((senha), '123456');
    const button = screen.getByRole('button', { name: /Entrar/i });
    userEvent.click(button);
    const valor = screen.getByPlaceholderText(/Valor/i);
    expect(valor).toBeInTheDocument();
    userEvent.type((valor), 10);
    const description = screen.getByPlaceholderText(/Descrição/i);
    expect(description).toBeInTheDocument();
    userEvent.type((description), 'description');
    const buttonAdd = screen.getByRole('button', { name: /Adicionar despesa/i });
    expect(buttonAdd).toBeInTheDocument();
    userEvent.click(buttonAdd);
  });
});
