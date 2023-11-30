// src/components/ListaProdutosGrid/testes/index.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductListGrid from '../index';

test('renders ProductListGrid component', () => {
  const mockData = [
    { id: 1, nome: 'Produto 1', preco: 20, estoque: 5 },
    { id: 2, nome: 'Produto 2', preco: 30, estoque: 0 },
  ];

  const mockOnProductClicked = jest.fn();

  render(<ProductListGrid data={mockData} onProductClicked={mockOnProductClicked} />);

  // Check if the component renders the correct number of product cards
  const productCards = screen.getAllByTestId(/product-card-button/i);
  expect(productCards).toHaveLength(mockData.length);

  // Trigger a click event on the first button (assuming there is at least one button in the cards)
  fireEvent.click(productCards[0]);

  // Check if the onProductClicked function was called with the correct product
  expect(mockOnProductClicked).toHaveBeenCalledWith(mockData[0]);
});
