import { fireEvent, render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

const onClick = jest.fn();

describe('Button Tests', () => {
  test('Render test', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('Clicks test', () => {
    render(<Button onClick={onClick}>test</Button>);
    const button = screen.getByText('test');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(3);
  });
  test('Cleat theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
