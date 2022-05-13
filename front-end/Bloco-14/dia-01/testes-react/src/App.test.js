import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  // acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  // fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão', () => {
//   render(<App />);
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existe dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const bntnSend = screen.getAllByRole('id-send');
  expect(bntnSend).toBeInTheDocument();
  expect(bntnSend).toHaveProperty('type', 'button');
  expect(bntnSend).toHaveValue('Enviar');
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i); ///string/i é utilizado para ignorar case sensitive
//   expect(linkElement).toBeInTheDocument();
// });
