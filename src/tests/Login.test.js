import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando a Pagina de Login', () => {
  it('Todos os items estao na tela', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /Entrar/i });
    expect(button).toBeInTheDocument();
    const email = screen.getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
    const senha = screen.getByPlaceholderText(/Senha/i);
    expect(senha).toBeInTheDocument();
  });
  it('Login Realizado Corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText(/Email/i);
    userEvent.type((email), 'trybe@trybe.com');
    const senha = screen.getByPlaceholderText(/Senha/i);
    userEvent.type((senha), '123456');
    const button = screen.getByRole('button', { name: /Entrar/i });
    userEvent.click(button);
    const form = screen.getByText(/WalletForm/i);
    expect(form).toBeInTheDocument();
  });
});
