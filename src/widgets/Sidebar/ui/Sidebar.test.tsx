import { fireEvent, render, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Button Tests', () => {
  test('Render test', () => {
    render(renderWithTranslation(<Sidebar />));
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Not Collapsed', () => {
    render(renderWithTranslation(<Sidebar />));
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
  test('Collapsed', () => {
    render(renderWithTranslation(<Sidebar />));
    const toggleBtn = screen.getByTestId('toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
