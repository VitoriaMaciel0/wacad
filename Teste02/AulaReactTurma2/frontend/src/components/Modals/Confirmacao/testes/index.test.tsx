// src/components/Modals/Confirmacao/tests/index.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationModal from '../index';



test('renders ConfirmationModal component', () => {
  const mockTitle = 'Confirmation Title';
  const mockMessage = 'Confirmation Message';
  const mockOnConfirm = jest.fn();
  const mockOnCancel = jest.fn();
  const isShow = true;

  render(
    <ConfirmationModal
      isShow={isShow}
      title={mockTitle}
      message={mockMessage}
      onConfirm={mockOnConfirm}
      onCancel={mockOnCancel}
    />
  );


  fireEvent.click(screen.getByText('Cancelar'));
  fireEvent.click(screen.getByText('Confirmar'));

  expect(mockOnCancel).toHaveBeenCalledTimes(1);
  expect(mockOnConfirm).toHaveBeenCalledTimes(1);
});

test('does not render ConfirmationModal when isShow is false', () => {
  const mockTitle = 'Confirmation Title';
  const mockMessage = 'Confirmation Message';
  const mockOnConfirm = jest.fn();
  const mockOnCancel = jest.fn();
  const isShow = false;

  render(
    <ConfirmationModal
      isShow={isShow}
      title={mockTitle}
      message={mockMessage}
      onConfirm={mockOnConfirm}
      onCancel={mockOnCancel}
    />
  );

 
  expect(screen.queryByText(mockTitle)).toBeNull();
  expect(screen.queryByText(mockMessage)).toBeNull();
});
