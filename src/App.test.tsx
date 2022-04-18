import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start insurance buttons', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/Developer Insurance/i);
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText(/Designer Insurance/i);
  expect(linkElement2).toBeInTheDocument();
});

test('renders Getsafe headline and subheadline', () => {
  render(<App />);
  const Headline = screen.getByText(/Welcome to Getsafe/i);
  expect(Headline).toBeInTheDocument();

  const subHeadline = screen.getByText(/Choose the insurance:/i);
  expect(subHeadline).toBeInTheDocument();
});

test('renders Getsafe logo', () => {
  render(<App />);
  const Logo = screen.getByAltText('logo');
  expect(Logo).toBeInTheDocument();
});
