// src/components/Tabela/tests/index.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomTable, { TableColumn } from '../index';

interface TestData {
  id: number;
  name: string;
  age: number;
}

const columns: TableColumn<TestData>[] = [
  { acessor: 'id', head: 'ID' },
  { acessor: 'name', head: 'Name' },
  { acessor: 'age', head: 'Age' },
  { head: 'Action', isActionButton: true, onActionClick: jest.fn() },
];

const testData: TestData[] = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Doe', age: 30 },
];

test('renders CustomTable component', () => {
  render(<CustomTable data={testData} columns={columns} />);


  expect(screen.getByText('ID')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Age')).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Action' })).toBeInTheDocument();


  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('25')).toBeInTheDocument();

  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('Doe')).toBeInTheDocument();
  expect(screen.getByText('30')).toBeInTheDocument();
});

test('handles action button click', () => {
  render(<CustomTable data={testData} columns={columns} />);

  const actionButtons = screen.getAllByRole('button', { name: 'Action' });
  expect(actionButtons).toHaveLength(2);
  fireEvent.click(actionButtons[0]);

  
  expect(columns[3].onActionClick).toHaveBeenCalledWith(testData[0]);
});
