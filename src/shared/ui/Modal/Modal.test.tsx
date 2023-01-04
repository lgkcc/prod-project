import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

const onClick = jest.fn();

describe('Modal Tests', () => {
  test('Test render with children', () => {
    render(<Modal isOpen onClose={onClick}>test</Modal>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('Show test', () => {
    render(<Modal isOpen onClose={onClick}>test</Modal>);
    expect(screen.getByTestId('Modal')).toHaveClass('open');
  });
  test('Not show test', () => {
    render(<Modal isOpen={false} onClose={onClick}>test</Modal>);
    expect(screen.getByTestId('Modal')).not.toHaveClass('open');
  });
  test('Click overlay test', () => {
    render(<Modal onClose={onClick} isOpen>test</Modal>);
    const overlay = screen.getByTestId('Overlay');
    fireEvent.click(overlay);
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('Modal')).toHaveClass('close');
  });
  test('Click exit test', () => {
    render(<Modal onClose={onClick} isOpen>test</Modal>);
    const exitBtn = screen.getByTestId('Exit');
    fireEvent.click(exitBtn);
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('Modal')).toHaveClass('close');
  });
  test('Press escape test', () => {
    render(<Modal onClose={onClick} isOpen>test</Modal>);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('Modal')).toHaveClass('close');
  });
});
