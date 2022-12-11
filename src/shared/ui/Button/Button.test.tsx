import { fireEvent, render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

const onClick = jest.fn();

describe('Button Tests', () => {
  test('Render test', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Clicks test', () => {
    render(<Button onClick={onClick}>TEST</Button>);
    const button = screen.getByText('TEST');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(3);
  });
  test('Cleat theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
