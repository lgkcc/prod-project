import { render, screen } from '@testing-library/react';
import renderWithAll from 'shared/lib/tests/renderWithAll';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Button Tests', () => {
  test('Render test', () => {
    render(renderWithAll(<Counter />, { initialState: { counter: { value: 10 } } }));
    expect(screen.getByTestId('value')).toHaveTextContent('10');
  });
  test('Increment test', () => {
    render(renderWithAll(<Counter />, { initialState: { counter: { value: 10 } } }));
    userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });
  test('Decrement test', () => {
    render(renderWithAll(<Counter />, { initialState: { counter: { value: 10 } } }));
    userEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('value')).toHaveTextContent('9');
  });
});
